!function(){!async function(){try{const a="/api/tareas?id="+n(),o=await fetch(a),r=await o.json();e=r.tareas,t()}catch(e){console.log(e)}}();let e=[];function t(){if(function(){const e=document.querySelector("#listado-tareas");for(;e.firstChild;)e.removeChild(e.firstChild)}(),0===e.length){const e=document.querySelector("#listado-tareas"),t=document.createElement("LI");return t.textContent="No Hay Tareas",t.classList.add("no-tareas"),void e.appendChild(t)}const t={0:"Pendiente",1:"Completa"};e.forEach(e=>{const a=document.createElement("LI");a.dataset.tareaId=e.id,a.classList.add("tarea");const n=document.createElement("P");n.textContent=e.nombre;const o=document.createElement("DIV");o.classList.add("opciones"),btnEstadoTarea=document.createElement("BUTTON"),btnEstadoTarea.classList.add("estado-tarea"),btnEstadoTarea.classList.add(""+t[e.estado].toLowerCase()),btnEstadoTarea.textContent=t[e.estado],btnEstadoTarea.dataset.estadoTarea=e.estado,btnEstadoTarea.ondblclick=function(){!function(e){console.log(e);const t="1"===e.estado?"0":"1";e.estado=t,console.log(e)}(e)},btnEliminarTarea=document.createElement("BUTTON"),btnEliminarTarea.classList.add("eliminar-tarea"),btnEliminarTarea.dataset.idTarea=e.id,btnEliminarTarea.textContent="Eliminar Tarea",o.appendChild(btnEstadoTarea),o.appendChild(btnEliminarTarea),a.appendChild(n),a.appendChild(o);document.querySelector("#listado-tareas").appendChild(a)})}function a(e,t,a){const n=document.querySelector(".alerta");n&&n.remove();const o=document.createElement("DIV");o.classList.add("alerta",t),o.textContent=e,a.parentElement.insertBefore(o,a.nextElementSibling),setTimeout(()=>{o.remove()},5e3)}function n(){const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries()).id}document.querySelector("#agregar-tarea").addEventListener("click",(function(){const o=document.createElement("DIV");o.classList.add("modal"),o.innerHTML='\n            <form class="formulario nueva-tarea">\n                <legend>Añade una nueva tarea</legend>\n                <div class="campo">\n                    <label>Tarea</label>\n                    <input \n                        type="text"\n                        name="tarea"\n                        placeholder="Añadir Tarea al Proyecto Actual"\n                        id="tarea"\n                    />\n                </div>\n                <div class="opciones">\n                    <input type="submit" class="submit-nueva-tarea" value="Añadir Tarea" />\n                    <button type="button" class="cerrar-modal">Cancelar</button>\n                </div>\n            </form>\n        ',setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},0),o.addEventListener("click",(function(r){if(r.preventDefault(),r.target.classList.contains("cerrar-modal")){document.querySelector(".formulario").classList.add("cerrar"),setTimeout(()=>{o.remove()},500)}r.target.classList.contains("submit-nueva-tarea")&&function(){const o=document.querySelector("#tarea").value.trim();if(""===o)return void a("El nombre de la tarea es obligatorio","error",document.querySelector(".formulario legend"));!async function(o){const r=new FormData;r.append("nombre",o),r.append("proyectoId",n());try{const n="http://localhost:3000/api/tarea",c=await fetch(n,{method:"POST",body:r}),s=await c.json();if(console.log(s),a(s.mensaje,s.tipo,document.querySelector(".formulario legend")),"exito"===s.tipo){const a=document.querySelector(".modal");setTimeout(()=>{a.remove()},5e3);const n={id:String(s.id),nombre:o,estado:"0",proyectoId:s.proyectoId};e=[...e,n],t()}}catch(e){console.log(e)}}(o)}()})),document.querySelector(".dashboard").appendChild(o)}))}();