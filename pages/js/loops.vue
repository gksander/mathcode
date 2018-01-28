<template>
	<div>
		<p class="title">Loops</p>
		<p>
			In programming we often want to repeat a block of code multiple times. To do this, we use <em>loops</em>. As an example, suppose we want to determine which numbers between 2 and 50 are prime. To do this, we would use a loop. In JavaScript there are many options for loops. We'll cover a couple of them on this page.
		</p>

		<p class="title">"While" Loops</p>
		<p>
			One common type of loop is the "while" loop, which runs a block of code "while" a certain condition is true. A "while" loop is best described with an example. Consider the code below, which finds the sum of the first 10 numbers (numbers from 1 to 10).	
		</p>
		<codeedit editorID="js/loops/while-sum">var sum = 0, i = 1;

while (i &lt;= 10) {
	sum = sum + i;
	i++; // DON'T FORGET TO DO THIS!!!
}

print(sum);</codeedit>
		<p>
			In the code above, we start be defining <code>sum = 0</code> and <code>i = 1</code>. We will use <code>sum</code> to keep track of our addition, and <code>i</code> will be what we add to our sum. Line (3) shows the <code>while</code> keyword which is followed by a condition <code>i &lt;= 20</code>. Whenever <code>i &lt;= 10</code>, whatever is inside the curly braces of the while loop will execute. Line (4) adds the value of <code>i</code> to the current value of <code>sum</code>, and then Line (5) increments <code>i</code> by 1. <strong>Do NOT forget to add Line (5)</strong>, otherwise <code>i</code> will constantly be equal to 1, which is always &le;20 and therefore the loop will run forever!
		</p>
		<p>
			When looking at the code above, we can think about it as follows.
		</p>
		<ul>
			<li><code>sum = 0</code> and <code>i = 1</code></li>
			<li>
				We enter the while loop when <code>sum = 0</code> and <code>i = 1</code> and so then Line (4) says <code>sum = 0 + 1</code> so <code>sum = 1</code>. Then Line (5) makes <code>i = 2</code>.
			</li>
			<li>
				Now, since <code>i</code> is still &le;10, we do the loop again. But now <code>sum = 1</code> and <code>i = 2</code> and so Line (4) says <code>sum = 1 + 2 = 3</code>. Then Line (5) makes <code>i = 3</code>.
			</li>
			<li>
				We repeat the previous step until <code>i &gt; 10</code>!
			</li>
		</ul>
		<p>
			To give you a better feel for what is going on here, consider the following code. It's essentially the same code, but now we're printing the values of <code>i</code> and <code>sum</code> on each part of the loop.
		</p>
		<codeedit editorID="js/loops/while-sum-2">var sum = 0, i = 1;

while (i &lt;= 10) {
	sum = sum + i;
	i++; // DON'T FORGET TO DO THIS!!!
	print(`sum = ${sum} and i = ${i}`);
}

print(sum);</codeedit>


		<p class="title">"For" Loops</p>
		<p>
			Another type of loop is the "for" loop, which acts a lot like the "while" loop. The code from above can be rewritten in a for loop as follows.
		</p>
		<codeedit editorID="js/loops/for-sum">var sum = 0, i;

for (i = 1; i &lt;= 10; i++) {
	sum = sum + i;
	print(`sum = ${sum} and i = ${i}`);
}

print(sum);</codeedit>
		<p>
			In this code, Line (1) "initializes" the variables <code>sum</code> and <code>i</code>. Then in Line (3) we use the <code>for</code> keyword to start a loop. Notice that we have <code>for (i = 1; i &lt;= 10; i++)</code>. This is saying, "when we start the loop, set <code>i = 1</code>. Let's run the loop while <code>i &lt;= 10</code>, and at the end of each iteration let's do <code>i++</code> so that <code>i</code> is increased by 1.". This is the general form of a for loop.
		</p>
		<hr>
		<p>
			Let's look at one last example of a for loop. Let's determine which numbers between 2 and 20 are prime! The code below shows this.
		</p>
		<codeedit editorID="js/loops/for-primes">for (var i = 2; i &lt;= 20; i++) {
	if (isPrime(i)) {
		print(`${i} is prime!`);
	}
}</codeedit>
		<p>
			Line (1) in the code above starts the for loop. Notice how the variable <code>i</code> is instantiated within the loop - that is, we defined the variable <code>i</code> within the for loop. We start at <code>i = 2</code>, and keep repeating while <code>i &lt;= 20</code>, and after each repetition we increment <code>i</code> by 1. We're using the <code>isPrime()</code> function to check whether or not <code>i</code> is prime. If <code>i</code> is prime, then we print <code>`${i} is prime!`</code>.
		</p>


		<p class="activities-title">Activities</p>
		<p class="title">Activity: Counting backwards</p>
		<p>
			Use a while loop to print the numbers 5, 4, 3, 2, 1 in that order. <em>When using the loop, make sure to increment or decrement your variable so that you don't create an infinite loop!</em>
		</p>
		<codeedit editorID="js/loops/activity-counting-backward">print("You're code here.");</codeedit>

		<p class="title">Activity: Printing the elements of an array</p>
		<p>
			A variable named <code>a</code> is defined in the background (you can see it printed below). We also defined a variable <code>n</code> to represent the length of the array <code>a</code>. Using a for-loop, print each element of the array <code>a</code>
		</p>
		<codeedit editorID="js/loops/activity-array-loop">print(a);

var n = a.length;

print("Your code here.");</codeedit>

		

	</div>
</template>

<script>
	import codeedit from '~/components/codeedit.vue';

	export default {
		components: {codeedit},
		
		data() {
			return {
				title: "Loops"
			}
		},

		head() {
			return {
				title: this.title
			}
		},

		mounted() {
			this.$store.commit('changeTitle', this.title);
			window.a = [1,3,5,7,9,11];
		},

		beforeDestroy() {
			delete window.a;
		}
	}

</script>