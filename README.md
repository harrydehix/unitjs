# simple-units
 ![GitHub milestones](https://img.shields.io/github/milestones/all/harrydehix/simple-units) ![GitHub last commit](https://img.shields.io/github/last-commit/harrydehix/simple-units)<br>
unit converter with focus on the golden mean between simplicity, customizability and performance

# Key Features
## Converting
```typescript
const converted = units.from(3, "cm").to("in");
console.log(converted); 
// Output: 1.1811
```
## Comparing
```typescript
const c1 = units.Convertible(100, "kilometer");
const c2 = units.Convertible(1000, "meter");

if (c1.lt(c2)) {
    console.log(`${c1} is less than ${c2}!`);
} else if (c1.eq(c2)) {
    console.log(`${c1} and ${c2} are equal!`);
} else {
    console.log(`${c1} is greater than ${c2}!`);
}
// Output: 100km is greater than 1000m!
```

## Formatting
```typescript
const convertible = units.Convertible(12.2323123, "kt");
console.log(convertible.format("%.2f %s", { length: "long" })); 
// Output: 12.23 knots
```
## Customizing
```typescript

const myCustomUnit = new Unit(...);

units.group("length").Editor.add(myCustomUnit);
```

# Documentation

⛔ Documentation still in progress ⛔

Read the full documentation including useful guides [here](). 

# Supported Units

## Area

<table>
	<thead>
		<tr>
			<th>unit</th>
			<th>synonyms</th>
			<th>%</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>%m²</th>
			<td><code>%m^2, %m2, square %meter, sq %meter, sq %metre, square %metre, square %meters, sq %meters, sq %metres, square %metres</code></td>
            <td><a href="https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes">SI-Prefixes</a> from <code>y</code> (yocto) to <code>Y</code> (yotta) </td>
		</tr>
		<tr>
			<th>%a</th>
			<td><code>%are, %ares</code></td>
			<td><code>c</code>(centiare), <code>d</code>(deciare), <code>da</code>(decare), <code>h</code>(hectare)</td>
		</tr>
        <tr>
			<th>in²</th>
			<td><code>″², in^2, ″^2, ″2, in2, square inch, sq inch, square inches, sq inches</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>ft²</th>
			<td><code>ft^2, ft2, square foot, sq foot, square feet, sq feet</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>mi²</th>
			<td><code>mi^2, mi2, square mile, sq mile, square miles, sq miles</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>yd²</th>
			<td><code>yd^2, yd2, square yard, sq yard, square yards, sq yards</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>ac</th>
			<td><code>acre, acres</code></td>
			<td>-</td>
		</tr>
	</tbody>
</table>

## Digital

<table>
	<thead>
		<tr>
			<th>unit</th>
			<th>synonyms</th>
			<th>%</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>%B</th>
			<td><code>%byte, %bytes</code></td>
			<td><a href="https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes">SI-Prefixes</a> from <code>k</code>(kilo) to <code>Y</code> (yotta) and <a href="https://en.wikipedia.org/wiki/Binary_prefix">IEC-Prefixes</a> from <code>Ki</code> (kibi) to <code>Yi</code> (yobi)</td>
		</tr>
		<tr>
			<th>%b</th>
			<td><code>%bit, %bits</code></td>
			<td><a href="https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes">SI-Prefixes</a> from <code>k</code>(kilo) to <code>Y</code> (yotta) and <a href="https://en.wikipedia.org/wiki/Binary_prefix">IEC-Prefixes</a> from <code>Ki</code> (kibi) to <code>Yi</code> (yobi)</td>
		</tr>
	</tbody>
</table>

## Length

<table>
	<thead>
		<tr>
			<th>unit</th>
			<th>synonyms</th>
            <th>%</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>%m</th>
			<td><code>%meter, %meters, %metre, %metres</code></td>
            <td><a href="https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes">SI-Prefixes</a> from <code>y</code> (yocto) to <code>Y</code> (yotta) </td>
		</tr>
		<tr>
			<th>in</th>
			<td><code>″, inch, inches</code></td>
			<td>-</td>
		</tr>
		<tr>
			<th>yd</th>
			<td><code>yard, yards</code></td>
			<td>-</td>
		</tr>
		<tr>
			<th>ly</th>
			<td><code>light-year, lightyear, light-years, lightyears</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>ft</th>
			<td><code>foot, feet</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>mi</th>
			<td><code>mi., mile, miles</code></td>
			<td>-</td>
		</tr>
	</tbody>
</table>

## Mass

<table>
	<thead>
		<tr>
			<th>unit</th>
			<th>synonyms</th>
            <th>%</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>%g</th>
			<td><code>%gram, %gramme, %grams</code></td>
            <td><a href="https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes">SI-Prefixes</a> from <code>y</code> (yocto) to <code>Y</code> (yotta) </td>
		</tr>
		<tr>
			<th>%mt</th>
			<td><code>%metric ton, %metric tons</code></td>
			<td><a href="https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes">SI-Prefixes</a> from <code>da</code> (deca) to <code>Y</code> (yotta) </td>
		</tr>
		<tr>
			<th>t</th>
			<td><code>ton, short ton, tons, short tons</code></td>
			<td>-</td>
		</tr>
		<tr>
			<th>oz</th>
			<td><code>oz av, ounce, avoirdupois ounce, ounces, avoirdupois ounces</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>lb</th>
			<td><code>lb av, pound, avoirdupois pound, pound-mass, pounds, avoirdupois pounds</code></td>
			<td>-</td>
		</tr>
	</tbody>
</table>

## Pressure

<table>
	<thead>
		<tr>
			<th>unit</th>
			<th>synonyms</th>
			<th>%</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>%Pa</th>
			<td><code>%pascal, %pascals</code></td>
            <td><a href="https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes">SI-Prefixes</a> from <code>μ</code> (micro) to <code>Y</code> (yotta) </td>
		</tr>
		<tr>
			<th>bar</th>
			<td><code>Bar, Bars</code></td>
			<td>-</td>
		</tr>
		<tr>
			<th>torr</th>
			<td><code>Torr, Torrs</code></td>
			<td>-</td>
		</tr>
		<tr>
			<th>atm</th>
			<td><code>standard atmosphere, standard atmospheres</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>Mpsi</th>
			<td><code>megapound per square inch, megapounds per square inch</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>psi</th>
			<td><code>lb. p. sq. in., psia, psig, pound-force per square inch, pound per square inch, pounds per square inch</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>ksi</th>
			<td><code>kilopound per square inch, kilopounds per square inch</code></td>
			<td>-</td>
		</tr>
	</tbody>
</table>

## Speed

<table>
	<thead>
		<tr>
			<th>unit</th>
			<th>synonyms</th>
			<th>%</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>%m/%</th>
			<td><code>%meter/%, %metre/%, %meter per %, %metre per %, %meters/%, %metres/%, %meters per %, %metres per %</code></td>
            <td>
            <p>
                <b>1.</b> <a href="https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes">SI-Prefixes</a> from <code>y</code> (yocto) to <code>Y</code> (yotta)
            </p>
            <p>
                <b>2.</b> Any time unit
            </p>
            </td>
		</tr>
		<tr>
			<th>ft/%</th>
			<td><code>foot/%, foot per %, feet/%, feet per %</code></td>
			<td>Any time unit</td>
		</tr>
		<tr>
			<th>mi/%</th>
			<td><code>mp%, mile/%, mile per %, miles/%, miles per %</code></td>
			<td>Any time unit</td>
		</tr>
		<tr>
			<th>kt</th>
			<td><code>kn, knot, knots</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>Bft</th>
			<td><code>Beaufort</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>Ma</th>
			<td><code>M, mach, Mach</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>c</th>
			<td><code>lightspeed, light-speed</code></td>
			<td>-</td>
		</tr>
	</tbody>
</table>

## Temperature

<table>
	<thead>
		<tr>
			<th>unit</th>
			<th>synonyms</th>
			<th>%</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>°C</th>
			<td><code>degree Celsius, degrees Celsius</code></td>
			<td>-</td>
		</tr>
		<tr>
			<th>°F</th>
			<td><code>degree Fahrenheit, degrees Fahrenheit</code></td>
			<td>-</td>
		</tr>
		<tr>
			<th>°R</th>
			<td><code>degree Rankine, degrees Rankine</code></td>
			<td>-</td>
		</tr>
		<tr>
			<th>K</th>
			<td><code>Kelvin</code></td>
			<td>-</td>
		</tr>
	</tbody>
</table>


## Time

<table>
	<thead>
		<tr>
			<th>unit</th>
			<th>synonyms</th>
			<th>%</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>%s</th>
			<td><code>%second, %seconds</code></td>
            <td><a href="https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes">SI-Prefixes</a> from <code>y</code> (yocto) to <code>d</code> (deci) </td>
		</tr>
		<tr>
			<th>min</th>
			<td><code>minute, minutes</code></td>
			<td>-</td>
		</tr>
		<tr>
			<th>h</th>
			<td><code>hour, hours</code></td>
			<td>-</td>
		</tr>
		<tr>
			<th>d</th>
			<td><code>day, days</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>wk</th>
			<td><code>week, weeks</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>mth</th>
			<td><code>month, months</code></td>
			<td>-</td>
		</tr>
        <tr>
			<th>a</th>
			<td><code>year, years</code></td>
			<td>-</td>
		</tr>
	</tbody>
</table>

# Roadmap

* Implement more units
* Finish documentation
* Host documentation on my website
