(function progress() {

 const now = new Date();
 const yearStart = new Date(now.getFullYear(), 0, 0);
 const yearEnd = new Date(now.getFullYear() + 1, 0, 0);
 const totalDay = 32 - new Date(now.getFullYear(), now.getMonth(), 32).getDate();
 const currentDay = now.getDate();
 const currentHour = now.getHours();
 const currentMin = now.getMinutes();

 // Day Progress
 const dayProgress = Math.floor((currentHour + currentMin / 60) / 24 * 100);
 // Month Progress
 const monthProgress = Math.floor(currentDay / totalDay * 100);
 // Year Progress
 const yearProgress = Math.floor(((now - yearStart) / (yearEnd - yearStart)) * 100);

 document.querySelector('.d').innerHTML = `
         										<div class="progress">
<div class="progress-filled" style="flex-basis: ${dayProgress}%"></div>
         										</div>
         										<h2>Day: ${dayProgress}%</h2> `
 document.querySelector('.m').innerHTML = `
         										<div class="progress">
         										<div class="progress-filled" style="flex-basis: ${monthProgress}%"></div>
         										</div>
         										<h2>Month: ${monthProgress}%</h2> `
 document.querySelector('.y').innerHTML = `
         										<div class="progress">
         										<div class="progress-filled" style="flex-basis: ${yearProgress}%"></div>
         										</div>
         										<h2>Year: ${yearProgress}%</h2> `
})();