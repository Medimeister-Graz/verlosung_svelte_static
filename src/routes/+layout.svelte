<script lang="ts">
	import '../app.css';
	import registerBg from '$lib/img/bg.jpg';
</script>

<div>
	<main>
		<section class="relative w-full h-full py-0 min-h-screen">
			<!--<div class="absolute top-0 w-full h-full bg-green-600/50 bg-no-repeat bg-full z-0" />-->
			<div
				class="bg-cover absolute h-full w-full blur-sm z-0"
				style="background-image: url({registerBg})"
			/>
			<div class="min-h-screen">
				<slot />
			</div>
		</section>
	</main>
</div>
