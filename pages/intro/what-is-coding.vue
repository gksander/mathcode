<template>
	<div>
		<banner :title="title"></banner>
		<section class="section">
			<div class="container content">
				<p class="title">What is coding?</p>
				<p>
					<em>Coding</em>, or <em>programming</em>, is the process of writing computer programs. Computer programs are basically just commands telling a computer what to do. Let's look at a simple example of a program.
				</p>
				<editor height="50px">print("I'm a program!");</editor>
				<p>
					In the code editor above, there is a single line: <code>print("I'm a program!");</code>. This line of code is just telling the computer, "print the statement 'I'm a program!' to the output". We are just telling the computer what to do in a language that it can understand. When looking at a program, the computer will generally work its way down the program, executing one line at a time. For example, consider the following program:
				</p>
				<editor height="80px">print("Hello, world!");
print("It's a great day to be alive!");
print("It's a great day to learn about coding!");</editor>
				<p>
					In the above program, there are now three lines of code. The computer just works its way down those three lines of code, executing each line of code when it gets to it. Try editing some of those lines, or adding your own! See how it changes the output to the right.
				</p>
				<p>
					There are many different types of programming, and <em>many</em> different programming "languages". We won't deal with the differences between these languages and types of languages - instead we will use a particular language, <em>JavaScript</em>, to help us in our exploration of general coding ideas.
				</p>

				<p class="title">What is "print"?</p>
				<p>
					You will see the <code>print</code> being used very often! This is just a function, or "command", that is telling the computer to print some text to the output section of the editor (to the right of the code). This is not a feature of JavaScript -- it is a custom feature of this website, which will be used to help us explore the JavaScript language and do some math.
				</p>
				<p>
					You can use this function (or "command") to print out values, which can be very useful. In the editor below, the <code>print()</code> function is used two times. Play around with this editor to see what <code>print</code> is doing.
				</p>
				<editor height="80px">print("Hi, again.");
print(3 + 5);</editor>
				
				<p class="title">What's up with the ";"?</p>
				<p>
					In JavaScript, it is optional to end each line with a semi-colon (;). In the editor above, notice that each line ends with ";". This isn't necessary, but it is good practice. This just explicitly tells the computer, "I'm done with this command. Move on to the next."
				</p>

				<p class="title">How do I compute values?</p>
				<p>
					JavaScript understands addition (+), subtraction (-), multiplication (*), and division (/). For example, JavaScript understands that <code>4 + 6/2</code> should be equal to 7 (make sure you see why!). You can also use parentheses like ( and ) to group together values, just like you do in math. So, JavaScript will understand <code>(4 + 6)/2</code> to have a value of 5. On <a href="/pages/intro/functions.php">another page</a> we will go over "functions" and ways to extend our math capabilities. For now, explore the following code.
				</p>
				<editor height="120px">print( 3 + 5 );
print( 3/2 + 5*2 );
print( 1/(2+1) );</editor>

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
				title: "What is coding?"
			}
		},

		head() {
			return {
				title: this.title
			}
		}
	}

</script>