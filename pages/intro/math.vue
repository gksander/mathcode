<template>
	<div>
		<banner :title="title"></banner>
		<section class="section">
			<div class="container content">
				<!-- Begin body -->
				
				<p class="title">Built-in Math Operators</p>
				<p>
					JavaScript has some built-in math operators, such as addition (+), subtraction (-), multiplication (*), and division (/). You can also use parentheses for grouping, like in math. The editor below shows some these operators in use.
				</p>
				<editor height="100px">print(3 + 5);
print(10/2);
print(5 + (3*2));
print(6/(2+1));</editor>
				<p>
					When doing math in JavaScript (and other programming languages), it is important to write math statements <em>in a way that the computer can understand</em>. As an example, the computer won't understand <code>3(5)</code>. You will need to enter <code>3*(5)</code> instead.
				</p>

				<p class="title">Additional Math Functions</p>
				<p>
					To make this site more fun, mathematically, I have added a handful of extra math capabilities. For example, I have added some useful mathematical functions and constants -- including the constant e and &pi;, as well as trigonometric and logarithmic functions. The editor below shows some of these math functions. It's okay if you don't know what all of them are, just be aware that you have some additional math functions available.
				</p>
				<editor height="350px">// Constants
print( e );
print( pi );

// Trig functions
print( sin(0.5) );
print( cos(0.5) );
print( tan(0.5) );
print( arcsin(0.5) );

// 3^2 is written as pow(3, 2)
print( pow(3, 2) );

// log_4(16) written as log(16, 4)
print( log(16, 4) );
// Natural log
print( ln(e) );</editor>
				<p>
					The table below is a list of the additional math functions and what they do.
				</p>
				<table class="table">
					<tbody>
						<tr>
							<th>Function/Constant</th> <th>Description</th> <th>Example</th>
						</tr>
						<tr>
							<td><code>e</code></td> <td>The constant \(e\)</td> <td><code>2*e</code> for \( 2\cdot e\)</td>
						</tr>
						<tr>
							<td><code>pi</code></td> <td>The constant \(\pi\)</td> <td><code>pi/2</code> for \(\frac{\pi}{2}\)</td>
						</tr>
						<tr>
							<td><code>pow(a, b)</code></td> <td>Base to a power</td> <td><code>pow(3, 7)</code> for \(3^7\)</td>
						</tr>
						<tr>
							<td><code>abs()</code></td> <td>Absolute value</td> <td><code>abs(-6)</code> for \(|-5|\)</td>
						</tr>
						<tr>
							<td><code>sqrt()</code></td> <td>The square root function</td> <td><code>sqrt(16)</code> for \(\sqrt{16}\)</td>
						</tr>
						<tr>
							<td><code>nroot(x, n)</code></td> <td>n<sup>th</sup> root</td> <td><code>nroot(27, 3)</code> gives \(\sqrt[3]{27}\)</td>
						</tr>
						<tr>
							<td><code>sin()</code></td> <td>The sine function</td> <td><code>sin(pi/2)</code> for \(\sin\left(\frac{\pi}{2}\right)\)</td>
						</tr>
						<tr>
							<td><code>cos()</code></td> <td>The cosine function</td> <td><code>cos(pi/2)</code> for \(\cos\left(\frac{\pi}{2}\right)\)</td>
						</tr>
						<tr>
							<td><code>tan()</code></td> <td>The tangent function</td> <td><code>tan(pi/4)</code> for \(\tan\left(\frac{\pi}{4}\right)\)</td>
						</tr>
						<tr>
							<td><code>asin(), arcsin()</code></td> <td>The inverse sine function</td> <td><code>asin(0.5)</code> for \(\sin^{-1}(0.5)\)</td>
						</tr>
						<tr>
							<td><code>acos(), arccos()</code></td> <td>The inverse cosine function</td> <td><code>acos(0.5)</code> for \(\cos^{-1}(0.5)\)</td>
						</tr>
						<tr>
							<td><code>atan(), arctan()</code></td> <td>The inverse tangent function</td> <td><code>atan(0.5)</code> for \(\tan^{-1}(0.5)\)</td>
						</tr>
						<tr>
							<td><code>exp()</code></td> <td>The exponential function (base e)</td> <td><code>exp(2)</code> gives \(\exp(2) = e^2\)</td>
						</tr>
						<tr>
							<td><code>log(x, b)</code></td> <td>The log function, base b</td> <td><code>log(100)</code> for \(\log(100)\), <code>log(16,4)</code> for \(\log_4(16)\)</td>
						</tr>
						<tr>
							<td><code>ln()</code></td> <td>The natural log function</td> <td><code>ln(e)</code> gives \(\ln(e)\)</td>
						</tr>
						<tr>
							<td><code>gcd(a, b)</code></td> <td>The greatest common denominator of a and b</td> <td><code>gcd(25, 15)</code> returns 5</td>
						</tr>
						<tr>
							<td><code>lcm(a, b)</code></td> <td>The least common multiple of a and b</td> <td><code>lcm(7, 5)</code> returns 35.</td>
						</tr>
						<tr>
							<td><code>ceil()</code></td> <td>The ceiling function</td> <td><code>ceil(2.3)</code> for \(\lceil 2.3 \rceil\)</td>
						</tr>
						<tr>
							<td><code>floor()</code></td> <td>The floor function</td> <td><code>floor(2.3)</code> for \(\lfloor 2.3 \rfloor\)</td>
						</tr>
					</tbody>
				</table>

			<!-- END BODY -->
			</div>
		</section>
	</div>
</template>

<script>
	import banner from '~/components/banner.vue';
	import editor from '~/components/editor.vue';


	export default {
		components: {banner, editor},
		data() {
			return {
				title: "Math Capabilities"
			}
		},

		head() {
			return {
				title: this.title
			}
		},

		mounted() {
	    renderMath();
		}
	}

</script>