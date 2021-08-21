import { inspect } from "util";
import Group from "./Group";
import { Convertable } from ".";

export type Converter = (val: number) => number;

export type UnitFormat = {
    short: string[],
    long: {
        sg: string[],
        pl: string[],
    }
}

/**
 * Represents a standard measure that is used to express amounts. 
 * 
 * A unit is always part of a {@link Group} (attribute: {@link Unit.group}). Groups combine units of one quantity.
 * All units of one group are described in relation to a special unit of the group - the base unit.
 * To add a unit to a group use the {@link Group.Editor}. Remember that a unit cannot be part
 * of multiple groups due to the bidirectional relation.
 * 
 * The exact relation between the base and another unit of the same group is defined in the converter functions {@link Unit.fromBase} and {@link Unit.toBase},
 * which are passed to every unit's constructor. 
 * Thereby `fromBase(val: number) => number` defines the conversion from the base unit to the newly
 * created unit and `toBase(val: number) => number` vice versa. As a result of this simple concept, all units of a group
 * are convertible into each other.
 *
 * The third important property of each unit is its {@link Unit.format}. 
 * This defines the unit's shape. It allows firstly the parser to recognize the unit in a string and 
 * secondly it provides the basis for the `.format()` method of the {@link Convertable}.
 * 
 * Lastly every unit is part of a unit system (attribute: {@link Unit.system}).
 * This meta information is used for the {@link Convertable}'s `.asBest()` method.
 * By default, the Convertable always remains in the same system of units.
*/
export default class Unit {
    /**
     * The unit's {@link Group}. Units belonging to the same group are convertible into each other.
     */
    group: Group = Group.None;
    /**
     * The unit's {@link UnitFormat}. Holds the unit's unique symbols, 
     * which allow the parser to recognize the unit in a string.
     * Added to that it provides the basis for the `.format()` method of the {@link Convertable}.
     */
    format: UnitFormat;
    /**
     * The unit system the unit is belonging to. E.g. `imperial`, `metric`, ...
     * 
     * This meta information is used for the {@link Convertable}'s `.asBest()` method.
     * By default, the Convertable always remains in the same system of units.
     */
    system: string;

    /**
     * Converts a value from this unit to the group's base unit.
     * @param val value in this unit
     * @returns value in the group's base unit
     */
    toBase: Converter;
    /**
     * Converts a value from the group's base unit to this unit.
     * @param val value in the group's base unit
     * @returns value in this unit
     */
    fromBase: Converter;

    /**
     * Creates a standard measure that is used to express amounts.
     * @param format the unit's format, holds the unit's different symbols (e.g. `m, metre, meters` for the unit meter)
     * @param toBase function to convert a value from this unit to the group's base unit
     * @param fromBase function to convert a value from the group's base unit to this unit
     * @param system the unit system the unit is belonging to
     */
    constructor(format: UnitFormat, toBase: Converter, fromBase: Converter, system: string) {
        this.format = format;
        this.system = system;
        this.toBase = toBase;
        this.fromBase = fromBase;
    }

    /**
     * An alternative to the unit's default constructor.
     *
     * Using this static method one doesn't need to specify functions describing how to convert the unit to the group's base unit and vice versa.
     *
     * Instead one only specifies the mathematical relation the the base unit - in the form of a ratio and a shift.
     *
     * <b>Example</b>: You want to define the unit <i>Celsius</i> and you have already defined the base unit <i>Kelvin</i>.
     * You know the formula to convert a value from <i>Celsius</i> to <i>Kelvin</i> is: `°C + 273.15 = °K`.
     * Using the `Unit` class you had to write the following:
     * ```
     * new Unit({...}, (val) => val + 273.15, (val) => val - 273.15, ...);
     * ```
     * As you see there is repetitive code. Couldn't one save one of the two converter functions?
     * Lets see how we create the unit using the `SimpleUnit` class.
     * ```
     * Unit.create({...}, 1, 273.15, ...)
     * ```
     * `1` is the ratio between the units, `273.15` the shift. Much easier, isn't it? And no repetitive code!
    */
    static create(format: UnitFormat, ratio: number, shift: number, system: string): Unit {
        return new Unit(format,
            (val: number) => {
                return val * ratio + shift;
            },
            (val: number) => {
                return (val - shift) / ratio;
            },
            system);
    }

    /**
     * Returns the unit's standard string representation - therefore the most common symbol. For example `'m'` is returned for the unit meter.
     * @returns the unit's standard string representation
     */
    toString() {
        return this.format.short[0];
    }

    /**
     * @hidden
     */
    [inspect.custom](depth: any, options: any) {
        return options.stylize(this.toString(), "special");
    }

    /**
     * Returns an array of units to which the current unit can be converted.
     * @returns an array of units to which the current unit can be converted
     */
    possibilities() {
        return this.group.possibilities();
    }
}