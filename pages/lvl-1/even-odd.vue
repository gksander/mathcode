<template>
	<div>
		<p class="title">Remainders</p>
		<p>
			On this page we will look at even and odd numbers. Before doing so, let's review the idea of "remainders" and they're relation to division. Recall that if we have a number \(a\) and divide it by \(b\) then we might get a remainder. For example, when we compute \(8 \div 3 \) we get 2 with a remainder of 2: \[ 8 = 3\cdot 2 + 2\] On your own, determine the remainder of 11 when divided by 4.
		</p>
		<p>
			In math and programming, it's common to use the term "modulus" to refer to the remainder after division. Conveniently, in most programming languages there is a "modulo" operator that tells us the remainder after division. In JavaScript, the modulo operator is notated with <code>%</code> and we use it kind of like the division symbol. For example, we would write <code>8 % 3</code> to compute the remainder of 8 after division by 3. So <code>8 % 3 == 2</code>. The code below shows a few examples of the modulo operator.
		</p>
		<codeedit editorID="lvl-1/even-odd/modulo">print(8 % 3);
print(11 % 4);

var x = 174, y = 23;
print(x % y);</codeedit>
		
		<p class="title">Even and Odd Numbers</p>
		<p>
			An <strong>even</strong> integer is an integer that is a multiple of 2. For example: 4, 6, and 10 are all even because \(2\cdot 2 = 4\), \(2\cdot 3 = 6\) and \(2\cdot 5 = 10\). On the other hand, an <strong>odd</strong> integer is an integer that is <em>not even</em>. We can think of an odd number as a number that is 1 more than an even number. We can then say that any odd number \(a\) looks like \[a = 2\cdot n + 1 \] where \(n\) is some integer.
		</p>
		<p>
			By the way even and odd numbers are defined, we can use <em>remainders</em> as a way to test whether or not a number is even or odd - and this is a common thing to do in programming! Since even integers are always 2 times another number, if we divide an even number by 2 we should get an integer (and hence 0 as a remainder!). Think about it for a second. Pick any even number and divide it by 2. What's the remainder? It should be 0.
		</p>
		<p>
			On the other hand, if we divide an odd number by 2 we should get 1 as a remainder. (Try it! Pick any odd number, divide it by 2, and notice how the remainder is 1). Therefore if <code>n</code> is an even number then <code>n % 2 == 0</code> and if <code>n</code> is odd then <code>n % 2 == 1</code>. The code below shows this in action.
		</p>
		<codeedit editorID="lvl-1/even-odd/test-even">var n = 7;

if (n % 2 == 0) {
	print(`${n} is even!`);
} else {
	print(`${n} is odd!`);
}</codeedit>
		<p>
			In the code above, change the value of <code>n</code> to various values and run the code. This trick of using <code>n % 2 == 0</code> to test whether or not <code>n</code> is even is a very useful trick in programming!
		</p>


		<p class="activities-title">Activities</p>
		<p class="title">Activity: Defining an "even" function</p>
		<p>
			In the editor below, define a function named <code>isEven</code> to test whether an integer <code>n</code> is even or not. The function should return <code>true</code> if <code>n</code> is even, and <code>false</code> otherwise. Then use this function to test a few numbers. We've added a little code to get you started - you need to edit what happens inside of the <code>isEven</code> function.
		</p>
		<codeedit editorID="lvl-1/even-odd/activity-even-function">function isEven(n) {
	// YOUR CODE HERE
	return false;
}

print( isEven(3) );
print( isEven(4) );</codeedit>
		
		<p class="title">Activity: Sorting numbers based on "parity"</p>
		<p>
			"Parity" is a word sometimes used to describe whether a number is even or odd. So, if we have a list of numbers and we want to sort them based on "parity," we are just sorting them based on whether or not they are even.
		</p>
		<p>
			An array <code>a</code> is defined behind the scenes, and it contains 10 random numbers between 0 and 100. Your job is to put all of the even numbers in the <code>evens</code> array and all of the odd numbers in the <code>odds</code> array. We've add a little code to get you started.
		</p>
		<codeedit editorID="lvl-1/even-odd/activity-sort-parity">var evens = [], odds = [];

for (var i = 0; i &lt; a.length; i++){
	// YOUR CODE HERE. DELETE THE LINE BELOW
	print(a[i]);
}

print(`Evens: ${evens}`);
print(`Odds: ${odds}`);</codeedit>
		<p>
			Here's a couple hints. Recall that we can add an element to an array using the <code>.push()</code> method of an array. So, <code>evens.push(42)</code> will add the number 42 to the end of the <code>evens</code> array. You will need to test whether <code>a[i]</code> is even or odd, and then add it to one of the appropriate array based on that.
		</p>


		<p class="title">Activity: Sum of odd numbers</p>
		<p>
			In the editor below, determine the sum of the first 100 odd numbers.
		</p>
		<codeedit editorID="lvl-1/even-odd/activity-sum-odds">print("Your code here.");</codeedit>




		

	</div>
</template>

<script>
	import codeedit from '~/components/codeedit.vue';

	export default {
		components: {codeedit},
		
		data() {
			return {
				title: "Even and Odd Numbers"
			}
		},

		head() {
			return {
				title: this.title
			}
		},

		mounted() {
			this.$store.commit('changeTitle', this.title);
			renderMath();

			window.a = [];
			for (var i = 0; i < 10; i++) {
				a.push(round(100*Math.random()));
			}
		},

		beforeDestroy() {
			delete window.a;
		}
	}

</script>