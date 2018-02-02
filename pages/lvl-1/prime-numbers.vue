<template>
	<div>
		<p class="title">Prime Numbers</p>
		<p>
			A <strong>prime number</strong> is a whole number that <em>cannot</em> be factored into two other whole numbers that are less than the number. In other words, a whole number is prime if the only other whole numbers that divide it are 1 and itself.
		</p>
		<p>
			As an example, 3 is a prime number - there are no numbers \(a\) and \(b\) such that \( a \times b = 3 \), other than 1 and 3. On the other hand, 4 is <em>not</em> a prime number because \( 2 \times 2 = 4 \). Whole numbers that are <em>not prime</em> are called <strong>composite numbers</strong>. On your own, try to think of 5 prime numbers and 5 composite numbers.
		</p>
		<p>
			We have defined a <code>isPrime()</code> function that will test whether or not a whole number is prime. It will return <code>true</code> if the number is prime, and <code>false</code> otherwise. So for example, <code>isPrime(3)</code> will return true but <code>isPrime(4)</code> will return false.
		</p>
		<codeedit editorID='lvl-1/prime-numbers/isPrime-function'>print( isPrime(3) );
print( isPrime(4) );</codeedit>
		<p>
			This <code>isPrime()</code> function allows us to do some fun investigating with prime numbers! Instead of doing a bunch of computations, we can let the computer do that - while we make sense of the results! Let's check out an example.
		</p>
		<p>
			Suppose we want to add together all of the prime numbers between 2 and 100. That would be a lot of work for us to do on paper, but the computer can do it in a fraction of a second! The code below shows this being done.
		</p>
		<codeedit editorID="lvl-1/prime-numbers/sum-primes-2to100">var sum = 0;

// Iterate from i=2 to i=100
for (var i = 2; i &lt;= 100; i++){
	// Check to see if i is prime...
	if (isPrime(i)) {
		// If so, add it to the sum.
		sum = sum + i;
	}
}

print(`Sum: ${sum}`);</codeedit>
		<p>
			In Line (1) we create a variable <code>sum</code> and set its value to 0 - we will use this to keep track of the sum of the prime numbers. Then on Line (4) we start a for-loop and loop from <code>i = 2</code> to <code>i = 100</code>, in increments of 1. For each value of <code>i</code> between 2 and 100, we will check to see if it is prime [Line (6)] and if so, we will add this value to our <code>sum</code> variable [Line (8)]. In Line (12) we print the sum. Here's the neat thing: on Line (4), change to 100 to a much bigger number, like 10000. This will tell the computer to compute the sum of all prime numbers between 2 and 10000 - and it can do this <em>very</em> quickly!
		</p>

		<p class="activities-title">Activities</p>
		<p class="title">Activity: Counting primes</p>
		<p>
			Use the editor below to determine the number of prime numbers less than 1,000. You might want to use a loop similar to the one presented in the previous code snippet.
		</p>
		<codeedit editorID="lvl-1/prime-numbers/activity-count-primes">print("Your code here.");</codeedit>

		<p class="title">Activity: Sorting based on primality</p>
		<p>
			An array <code>a</code> of random whole numbers between 2 and 100 has been defined behind the scenes. Sort the elements of <code>a</code> into two arrays based on whether or not they are prime. We've started you off with a little code.
		</p>
		<codeedit editorID="lvl-1/prime-numbers/activity-sort-numbers">var primes = [], composites = [];

for (var i = 0; i &lt; a.length; i++) {
	// YOUR CODE HERE
}

print(`Primes: ${primes}`);
print(`Composites: ${composites}`);</codeedit>

		<p class="title">Challenge Activity: Sum of the first 100 primes</p>
		<p>
			Use the editor below to determine the sum of <em>the first 100 primes</em>. Hint: this is different than computing the sum of all prime numbers less than or equal to 100. 
		</p>
		<codeedit editorID="lvl-1/prime-numbers/activity-sum-of-first100-primes">print("Your code here.");</codeedit>
		<p>
			If done correctly, you should get a value of 24133. After doing that, find the sum of the first 1000 prime numbers.
		</p>

		<p class="title">Challenge Activity: Defining the isPrime function</p>
		<p>
			We have been using an <code>isPrime()</code> function, which is defined behind the scenes. However, we actually wrote the code for that function - and you can too! In the editor below, create a function <code>isPrime2()</code> that determines whether or not a number is prime. The function should return <code>true</code> if the number is prime, and <code>false</code> otherwise.
		</p>
		<codeedit editorID="lvl-1/prime-numbers/activity-define-isPrime">function isPrime2(n) {
	// YOUR CODE HERE
	return false;
}

print( isPrime2(3) );
print( isPrime2(4) );</codeedit>

		
		

	</div>
</template>

<script>
	import codeedit from '~/components/codeedit.vue';

	export default {
		components: {codeedit},
		
		data() {
			return {
				title: "Prime Numbers"
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
			// Array a for student use
			window.a = [7, 11];
			for (var i = 0; i < 8; i++) {
				window.a.push( 2 + round(98*Math.random()) );
			}
			window.a = window.a.sort((x,y) => x - y);
		},

		beforeDestroy() {
			delete window.a;
		}
	}

</script>