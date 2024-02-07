<script lang="ts">
	// core components
	import mmgraz from '$lib/img/mmgraz_transparent.png';
	import { base } from '$app/paths';
</script>

<div class="container mx-auto px-4 min-h-screen">
	<div class="flex content-center items-center justify-center min-h-screen">
		<div class="w-full lg:w-6/12 px-4">
			<div
				class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0"
			>
				<div class="rounded-t mb-0 px-6 py-6 pb-4">
					<div class="btn-wrapper text-center flex justify-center">
						<img alt="Logo der Medimeister" src={mmgraz} width="60%" />
					</div>
					<div class="text-black text-center text-4xl mb-3 font-bold tracking-wide uppercase">
						<small>Ticketportal</small>
					</div>
					<hr class="mt-6 border-b-1 border-slate-950" />
				</div>
				<div id="border" class="px-4">
					<div
						class="flex-auto px-2 bg-yellow-300/50 rounded-md text-center font-semibold border-x-8 border-yellow-500"
					>
						<h1>
							Alle Codes wurden eingelöst. Es gibt keine weitere Verteilung über die Warteliste.
						</h1>
						<h1>
							Vielen Dank an alle, die sich angemeldet haben und an die Regeln gehalten haben!
						</h1>
						<h1>Wir freuen uns auf euch in Obermehler!</h1>
					</div>
					<br />
					<div
						class="flex-auto px-2 bg-green-300/50 rounded-md text-center font-semibold border-x-8 border-green-500"
					>
						<h1>
							Eure diesjährigen Daten wurden archiviert und fürs nächste Jahr gespeichert. Im
							nächsten Jahr könnt ihr diese direkt wieder verwenden, nachdem ihr eure E-Mail und
							Studienjahr aktualisiert habt.
						</h1>
						<h1>Die Infos zur Verlosung findet ihr dann nächstes Jahr wieder auf Instagram.</h1>
					</div>
				</div>

				<div class="justify-center px-4 lg:px-10 pt-0">
					<div class="text-center">
						<a href="mailto:kontakt@medimeistergraz.org" class="text-slate-600 text-sm"
							>Fragen oder Probleme?</a
						>
					</div>
					<div class="pb-4 text-center">
						<a href="{base}/dsgvo" class="text-slate-400 text-xs">Datenschutzerklärung</a>
						|
						<a href="{base}/impressum" class="text-slate-400 text-xs mr-14">Impressum</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
