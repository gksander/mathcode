<template>
	<div>
		<banner :title="title"></banner>
		<section class="section">
			<div class="container content">
				<p class="title">What is this site?</p>
				<p>
					This is site was written by Grant Sander, and is an extension of <a href="https://cosmalearning.com" target="_blank">cosmalearning.com</a>. It was developed to support learners in exploring both math <em>and</em> programming. The site consists of various tutorials, examples, and exercises, ranging from basic programming concepts to some sophisticated mathematical ideas. Througout the site you will see editors that look like this:
				</p>
				<editor height="80px" editorID="start/simpleprogram">print("I'm an editor!");
print("You can edit me, and run the code.");</editor>
				<p>
					You can edit the code in the code-editor, and then press the "Run Code" button to run your code. The output of your code will be shown to the right (or below) the code editor. <em>You can also press Ctrl + Enter (or Cmd + Enter on Mac) to run your code.</em>
				</p>
				<p>
					The code editors are running JavaScript code. JavaScript is a programming language that nearly all websites use -- it is the code that runs in your web browser. So, anytime you are using an interactive website, chances are there is some JavaScript running behind the scenes. In this site you will also have access to some functionality that is beyond basic JavaScript to make the exercises more interesting.
				</p>
				<p>
					You will see the <code>print()</code> command <em>very</em> often throughout the site. The <code>print()</code> command will print an output to the output section of the editor. As an example, if you want to know what 4 + 6.5 is, you could run <code>print(4 + 6.5);</code>.
				</p>


				<p class="title">What is Coding/Programming?</p>
				<p>
					<em>Coding</em>, or <em>programming</em>, is the process of writing computer programs. Computer programs are basically just commands telling a computer what to do. Let's look at a simple example of a program.
				</p>
				<editor height="50px" editorID="start/imaprogram">print("I'm a program!");</editor>
				<p>
					In the code editor above, there is a single line: <code>print("I'm a program!");</code>. This line of code is just telling the computer, "print the statement 'I'm a program!' to the output". We are just telling the computer what to do in a language that it can understand. When looking at a program, the computer will generally work its way down the program, executing one line at a time. For example, consider the following program:
				</p>
				<editor height="80px" editorID="start/programlines">print("Hello, world!");
print("It's a great day to be alive!");
print("It's a great day to learn about coding!");</editor>
				<p>
					In the above program, there are now three lines of code. The computer just works its way down those three lines of code, executing each line of code when it gets to it. Try editing some of those lines, or adding your own! See how it changes the output to the right.
				</p>
				<p>
					There are many different types of programming, and <em>many</em> different programming "languages". We won't deal with the differences between these languages and types of languages - instead we will use a particular language, <em>JavaScript</em>, to help us in our exploration of general coding ideas.
				</p>


				<p class="title">Math Capabilities</p>
				<p>
					JavaScript has some built-in math operators, such as addition (+), subtraction (-), multiplication (*), and division (/). You can also use parentheses for grouping, like in math. The editor below shows some these operators in use.
				</p>
				<editor height="100px" editorID="start/simplemathoperators">print(3 + 5);
print(10/2);
print(5 + (3*2));
print(6/(2+1));</editor>
				<p>
					When doing math in JavaScript (and other programming languages), it is important to write math statements <em>in a way that the computer can understand</em>. As an example, the computer won't understand <code>3(5)</code>. You will need to enter <code>3*(5)</code> instead.
				</p>

				<p>
					To make this site more fun, mathematically, I have added a handful of extra math capabilities. For example, I have added some useful mathematical functions and constants - including the constant \(e\) and \(\pi\), as well as trigonometric and logarithmic functions. The editor below shows some of these math functions. It's okay if you don't know what all of them are, just be aware that you have some additional math functions available.
				</p>
				<editor height="350px" editorID="start/somemathfunctions">// Constants
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

				<!-- <p class="title">How should I maneuver the site?</p>
				<p>
					This site consists of a lot of separate pages, all of which can be access from the top nav-bar. We recommend you start by working through the pages in the "Intro" section, and then working through the pages in the "JavaScript" section. After that, you should be prepared to start tackling the rest of the pages in the site.
				</p>

				<p class="title">Who made this?</p>
				<p>
					This site was written by Grant Sander. You can get in contact with him at <a href="mailto:grant@cosmalearning.com" target="_blank">grant@cosmalearning.com</a>. Grant is a math nerd who also happens to love coding, and thinks more people should be enjoying the experience of writing code!
				</p> -->


			</div>
		</section>
	</div>
</template>

<script>
	import editor from '~/components/editor.vue';
	import banner from '~/components/banner.vue';

	export default {
		components: {editor, banner},
		data() {
			return {
				title: "Getting Started"
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