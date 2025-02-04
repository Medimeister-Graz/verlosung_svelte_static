<script lang="ts">
	import '../app.css';
	import registerBg from '$lib/img/bg.jpg';

	//dark mode toggle
	import { ModeWatcher } from 'mode-watcher';
</script>

<main>
	<ModeWatcher />

	<slot />
</main>
