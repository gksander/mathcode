<template>
	<div>
		<p class="title">Minimums and Maximums</p>
		<p>
			In both math and programming, the idea of <em>minimum</em> and <em>maximum</em> functions is important. When looking at two numbers \(a\) and \(b\), we say that the minimum (or "min" for short) of the two numbers is the number that is less than the other. On the other hand, the maximum (or "max") is the number that is greater than the other. 
		</p>
		<p>
			For example, when looking at 3 and 5, we would say that the min of these two numbers is 3, while the max is 5. In mathematical notation, we would write this as \[ \min(3,5) = 3 \quad\text{and}\quad \max(3,5) = 5 \] On this site we can use similar notation - we have a <code>min()</code> function and <code>max()</code> function that behave just like the math versions. The editor below shows this.
		</p>
		<codeedit editorID="lvl-1/min-max/min-max-functions">print( min(3,5) );
print( max(3,5) );</codeedit>
		<p>
			Try editing the numbers in the code above and see what happens.
		</p>
		<hr>

		<p>
			Finding the minimum of two numbers is somewhat easy. In fact, we could have tested this using the <code>&lt;</code> operator. However, it is often useful to find the minimum of a collection of numbers. To do this, we can do the following:
		</p>
		<ol>
			<li>Create a variable to hold the "current" minimum number. Let's call ours <code>minNumber</code>. We will set this equal to the first element of our list.</li>
			<li>We will now loop through our list of numbers. For each element in our list, if the number is smaller than our current minimum, <code>minNumber</code>, we will replace <code>minNumber</code> with this smaller number.</li>
			<li>Once we've looped through all of our numbers, <code>minNumber</code> should contain the smallest number.</li>
		</ol>
		<p>
			The code below shows this in action. An array <code>a</code> of 10 random numbers between 0 and 100 is defined behind the scenes, and we will find the minimum of this array.
		</p>
		<codeedit editorID="lvl-1/min-max/min-of-array">print(`a = ${a}`);

// set minNumber to the first element of a
var minNumber = a[0];

// Loop through a...
for (var i = 0; i &lt; a.length; i++) {
	// Set minNumber to the smaller of minNumber and a[i]
	minNumber = min(minNumber, a[i]);
}

print(`Min number: ${minNumber}`);</codeedit>
		<p>
			Notice that in Line (9) we set <code>minNumber = min(minNumber, a[i])</code>. This tells the computer to find the smaller of <code>minNumber</code> and <code>a[i]</code>, and use that for the new value of <code>minNumber</code>.
		</p>


		<p class="activities-title">Activites</p>
	
		<p class="title">Activity: Max of a list of numbers</p>
		<p>
			An array <code>a</code> of 10 random numbers between 0 and 100 is defined behind the scenes. Use a for loop to determine the maximum number of this array.
		</p>
		<codeedit editorID="lvl-1/min-max/activity-max-of-array">print(`a = ${a}`);

// YOUR CODE HERE</codeedit>

		<p class="title">Activity: Defining the min function</p>
		<p>
			We've been using a <code>min()</code> function that is defined for us behind the scenes. But, we can define our own minimum function! Define a function <code>min2()</code> that takes two numbers as its arguments, and then returns the smaller of the two numbers. We've added a little code for you.
		</p>
		<codeedit editorID="lvl-1/min-max/activity-define-min">function min2(a, b) {
	// YOUR CODE HERE
	return 0;
}

print( min2(3, 5) );
print( min2(-7, -10) );</codeedit>
		

	</div>
</template>

<script>
	import codeedit from '~/components/codeedit.vue';

	export default {
		components: {codeedit},
		
		data() {
			return {
				title: "Min and Max"
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
			// Create array a
			window.a = [];
			for (var i = 0; i < 10; i++) {
				window.a.push(round(100*Math.random()));
			}
		},

		beforeDestroy() {
			delete window.a;
		}
	}

</script>