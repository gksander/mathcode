<template>
	<div>
		<p class="title">"Times as large as" comparisons</p>
		<p>
			We have <em>a lot</em> of ways to compare the values of two quantities. For example, suppose <b>John is 65 inches tall and Sally is 45 inches tall</b>. We can ask a lot of questions about how their heights compare, including the following: 
		</p>
		<ol>
			<li>John is how many inches taller than Sally?</li>
			<li>Sally is how many inches taller than John?</li>
			<li>John is how many times as tall as Sally?</li>
			<li>Sally is how many times as tall as John?</li>
		</ol>
		<p>
			Let's consider questions (1) and (2) from above. To answer questions about "how much more", we can generally use subtraction. For example, John is \(65 - 45 = 20\) inches taller than Sally, and Sally is \(45 - 65 = -20\) inches tall than John. In math, it's common to use negative numbers to indicate an "opposite" direction. Since Sally is actually <em>shorter</em> than John by 20 inches, we say Sally is &minus;20 inches <em>taller</em> than John.
		</p>
		<p>
			Now, let's turn our attention to questions (3) and (4) from above. We used subtraction to answer questions about "how much more". In a similar way, we can use <em>division</em> to answer questions about "how many times as large as". For example, we could say that John is \(\frac{65}{45}\) times as tall as Sally. Since \(\frac{65}{45} \approx 1.444\), we would say that John is about 1.444 times as tall as Sally - which seems reasonable!
		</p>
		<p>
			On the other hand, Sally is \(\frac{45}{65}\) times as tall as John, and since \(\frac{45}{65} \approx 0.69\) we would say Sally is about 0.69 times as tall as John. Since Sally is actually shorter than John, we expect Sally to be less than 1 times as tall as John.
		</p>
		<p>
			Let's see how we can represent these ideas in code!
		</p>
		<codeedit editorID="lvl-1/percents/john-sally-compare">var john_height = 65;
var sally_height = 45;

print(`John is ${john_height - sally_height} inches tall than Sally`);
print(`Sally is ${sally_height - john_height} inches tall than John`);
print(`John is ${john_height / sally_height} times as tall as Sally.`);
print(`Sally is ${sally_height / john_height} times as tall as John.`);
</codeedit>
		<p>
			Make sure you undersand what each line of the code above is doing! Try changing the values of <code>john_height</code> and <code>sally_height</code> and predicting what will happen. For example, if we make Sally taller John, how will this change our outputs in lines (4) - (7)?
		</p>
		<hr>
		<p>
			In general, we can always say that <span class="has-text-danger">\(A\) is \(\frac{A}{B}\) times as large as \(B\)</span>! We just make sure to avoid the case of \(B=0\) when using this thinking (so that we don't divide by 0!). The code below shows this in programming form.
		</p>
		<codeedit editorID="lvl-1/percents/a-tala-b">var A = 24;
var B = 36;

print(`${A} is ${A/B} times as large as ${B}.`);
print(`${B} is ${B/A} times as large as ${A}.`);</codeedit>
		<p>
			Try tinkering with the values of <code>A</code> and <code>B</code> in the code above. Then use the code to answer the question, "257 is how many times as large as 152?".
		</p>

		<p class="title">Percents</p>
		<p>
			Percentages are <em>very commonly</em> used in the real world, and they're almost the same thing as "times as large as" comparisons! Let's compare the numbers 36 and 24. Using our thinking from above, we could say that 36 is \[\frac{36}{24} = 1.5\] times as large as 24. However, we might also ask, "36 is how many times as large as \(^1/_{100}\) of 24?". In this case, we're comparing 36 to \(^1/_{100}\) of 24, instead of just 24 - so we should expect our answer to be 100 times as large as our answer from before (since we're comparing to something 100 times smaller!). Since 36 is 1.5 times as large as 24, 36 is \[1.5 \cdot 100 = 150\] times as large as \(^1/_{100}\) of 24. However, saying "36 is 150 times as large as \(^1/_{100}\) of 24" is a lot of work - so instead we say "36 is 150 <em>percent</em> of 24" or "36 is 150% of 24".
		</p>
		<p>
			Percents aren't as scary as they seem! They're just "times as large as comparisons," but you're comparing to \(^1/_{100}\) of a number so the result is 100 times as large! The code below shows the previous example.
		</p>
		<codeedit editorID="lvl-1/percents/percent-intro">var A = 36;
var B = 24;

print(`${A} is ${A/B} times as large as ${B}.`);
print(`${A} is ${(A/B) * 100} times as large as 1/100 of ${B}.`);
print(`${A} is ${(A/B) * 100}% of ${B}.`);</codeedit>
		<p>
			In lines (1) - (2) we're just storing our values in variables (we'll see why this is useful!). The in lines (4) - (6) we're making the comparisons from above. No change <code>A</code> to 42 and see what happens! After that, change <code>B</code> to 80.
		</p>

		<p class="title">Using a Percent</p>
		<p>
			In the previous section we looked at <em>computing</em> percents. Now let's see how we can <em>use</em> percentages. Suppose that some number \(x\) is 150% of 30. This means that \(x\) is 150 times as large as \(^1/_{100}\) of 30 and so \[\begin{aligned} x &amp;= 150 \cdot \left(\frac{1}{100}\cdot 30\right) \\ &amp;= \frac{150}{100} \cdot 30 \\ &amp;= 1.5\cdot 30 \\ &amp;= 45 \end{aligned}\] Therefore, 150% of 30 is 1.5 times as large as 30! So, we can say that \(x = 45\). This way of thinking is very important! It's actually more common to <em>use</em> a percent than it is to compute one.
		</p>
		<p>
			In general, if \(A\) is \(p%\) of \(B\) then \(A\) is \(p\) times as large as \(^1/_{100}\) of \(B\) and therefore \(A\) is \(\frac{p}{100}\) times as large as \(B\). So \[ A = \frac{p}{100} \cdot B \] As another example, suppose that \(A\) is 225% of 55. Then \[\begin{aligned} A &amp;= \frac{225}{100} \cdot 55 \\ &amp;= 123.75 \end{aligned}\] The code below shows how we can "codify" this.
		</p>
		<codeedit editorID="lvl-1/percents/using-percent">var percent = 225;
var B = 55;

print(`If A is ${percent}% of ${B}...`);
print(`Then A = ${(percent/100) * B}.`);</codeedit>

		<p class="title">Computing Tax Amounts</p>
		<p>
			Percents are used in the real world <em>all the time</em>. One example is sales tax. In most states, when you make a purchase, you have to pay some amount to the government - and the amount that you pay the government is dependent on how much you spend. For example, in Arizona there is a sales tax of about 6%, which means that any time you make a purchase, you have to give the government an additional 6% of the amount that you just spent.
		</p>
		<p>
			Let's look at some examples of this. If you make a $50 purchase, then you will have to pay 6% of that to the government in the form of taxes. 6% of $50 is \(\frac{6}{100} = 0.06\) times as large as $50 so the amount you pay in taxes is \[\begin{aligned} \frac{6}{100} \cdot 50 &amp;= 0.06 \cdot 50 \\ &amp;= 3 \end{aligned}\] So, you'll have to pay $3 in taxes, and therefore you'll have to pay \(50 + 3 = 53\) dollars in total. 
		</p>
		<p>
			Let's think of this in another way. We paid $50 plus an additional 6% of $50, and 6% of $50 is 0.06 times as large as $50. Then the total amount we paid is: \[\begin{aligned} 50 + 0.06\cdot 50 &amp;= 1\cdot 50 + 0.06\cdot 50 \\ &amp;= (1 + 0.06)\cdot 50 \\ &amp;= 1.06\cdot 50 \end{aligned}\] Therefore, a 6% tax makes our purchase 1.06 times as large! This is true, regardless of how much we spend - the 6% tax will <em>always</em> make our total 1.06 times as large!
		</p>
		<p>
			The code below is an example of a calculator that will compute our total given a purchase amount and tax percent.
		</p>
		<codeedit editorID="lvl-1/percents/compute-tax-total">var tax_percent = 6;
var purchase_amount = 50;

// Compute "times as large as" number
var times_as_large = 1 + (tax_percent / 100);
// Total cost
var total_cost = times_as_large * purchase_amount;

print(`Total: $${total_cost}.`);</codeedit>

		
		<p class="activities-title">Activities</p>
		<p class="title">Activity: Computing a Percent</p>
		<p>
			Edit line (5) in the code below so that the output of the code is mathematically correct. When <code>A = 24</code> and <code>B = 12</code>, the output should say "24 is 200% of 12.".
		</p>
		<codeedit editorID="lvl-1/percents/activity-percent-calculator">var A = 24;
var B = 12;

// CHANGE THE NEXT LINE
var percent_of = 0;

print(`${A} is ${percent_of}% of ${B}.`);</codeedit>

		<p class="title">Activity: Using a Percent</p>
		<p>
			Edit line (5) in the code below so that the output of the code is mathematically correct. When <code>B = 12</code> and <code>p = 150</code>, the output should say "150% of 12 is 18.".
		</p>
		<codeedit editorID="lvl-1/percents/activity-using-percent">var B = 12;
var p = 150;

// CHANGE THE LINE BELOW
var A = 0;

print(`${p}% of ${B} is ${A}.`);</codeedit>
		
		<p class="title">Activity: Tax Calculator</p>
		<p>
			In the code below, there is a <code>total_amount()</code> function that takes an amount and tax percent as its inpu
		</p>
		<codeedit editorID="lvl-1/percents/activity-tax-calculator">function total_amount(amount, tax_percent){
	// YOUR CODE HERE
	return 0; // &lt;-- Delete/change this line.
}

print(total_amount(50, 5));
print(total_amount(120, 4));</codeedit>


		

	</div>
</template>

<script>
	import codeedit from '~/components/codeedit.vue';

	export default {
		components: {codeedit},
		
		data() {
			return {
				title: "Percents"
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

			// window.a = [];
			// for (var i = 0; i < 10; i++) {
			// 	a.push(round(100*Math.random()));
			// }
		},

		beforeDestroy() {
			// delete window.a;
		}
	}

</script>