<script lang="ts">
	//ui components
	import LightModeButton from '$lib/components/lightmodebutton.svelte';

	import img from '$lib/img/bg.jpg';

	// core components
	import { base } from '$app/paths';
</script>

<div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-screen">
	<div class="flex items-center justify-center py-12 min-h-screen">
		<div class="mx-auto grid w-[350px] gap-6">
			<div class="relative flex items-center text-lg font-medium">
				<!-- <Command class="mr-2 h-6 w-6" /> -->
				Medimeisterschaften Graz
				<div class="relative flex items-center justify-center ml-auto">
					<LightModeButton />
				</div>
			</div>

			<div class="grid gap-2 text-center">
				<h1 class="text-3xl font-bold">Ticketportal</h1>

				<div
					class="flex-auto px-2 bg-yellow-300/50 rounded-md text-center border-x-8 border-yellow-500"
				>
					<h1>
						Alle Codes wurden eingelöst. Es gibt keine weitere Verteilung über die Warteliste.
					</h1>
					<h1>Vielen Dank an alle, die sich angemeldet haben und an die Regeln gehalten haben!</h1>
					<h1>Wir freuen uns auf euch in Obermehler!</h1>
				</div>

				<div
					class="flex-auto px-2 bg-green-300/50 rounded-md text-center border-x-8 border-green-500"
				>
					<h1>
						Eure diesjährigen Daten wurden archiviert und fürs nächste Jahr gespeichert. Im nächsten
						Jahr könnt ihr diese direkt wieder verwenden, nachdem ihr eure E-Mail und Studienjahr
						aktualisiert habt.
					</h1>
					<h1>Die Infos zur Verlosung findet ihr dann nächstes Jahr wieder auf Instagram.</h1>
				</div>
			</div>

			<div class=" text-center text-sm">
				<a href="mailto:kontakt@medimeistergraz.org" class="underline">Fragen oder Probleme?</a>
			</div>

			<p class="text-muted-foreground px-8 text-center text-sm">
				Durch klicken des "Login"-Buttons, stimmst du unserer
				<a href="{base}/dsgvo" class="hover:text-primary underline underline-offset-4">
					Datenschutzvereinbarung
				</a>
				zu.
				<a href="{base}/impressum" class="hover:text-primary underline underline-offset-4">
					Impressum
				</a>
			</p>
		</div>
	</div>
	<div class="bg-muted hidden lg:block">
		<img
			src={img}
			alt="background"
			width="1920"
			height="1080"
			class="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
		/>
	</div>
</div>
