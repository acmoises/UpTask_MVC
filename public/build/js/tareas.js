!function(){!async function(){try{const t="/api/tareas?id="+c(),a=await fetch(t),o=await a.json();e=o.tareas,n()}catch(e){console.log(e)}}();let e=[],t=[];document.querySelector("#agregar-tarea").addEventListener("click",(function(){o()}));function a(a){const o=a.target.value;t=""!==o?e.filter(e=>e.estado===o):[],n()}function n(){!function(){const e=document.querySelector("#listado-tareas");for(;e.firstChild;)e.removeChild(e.firstChild)}();const a=t.length?t:e;if(0===a.length){const e=document.querySelector("#listado-tareas"),t=document.createElement("LI");return t.textContent="No Hay Tareas",t.classList.add("no-tareas"),void e.appendChild(t)}const r={0:"Pendiente",1:"Completa"};a.forEach(t=>{const a=document.createElement("LI");a.dataset.tareaId=t.id,a.classList.add("tarea");const d=document.createElement("P");d.textContent=t.nombre,d.ondblclick=function(){o(editar=!0,{...t})};const s=document.createElement("DIV");s.classList.add("opciones"),btnEstadoTarea=document.createElement("BUTTON"),btnEstadoTarea.classList.add("estado-tarea"),btnEstadoTarea.classList.add(""+r[t.estado].toLowerCase()),btnEstadoTarea.textContent=r[t.estado],btnEstadoTarea.dataset.estadoTarea=t.estado,btnEstadoTarea.ondblclick=function(){!function(e){const t="1"===e.estado?"0":"1";e.estado=t,i(e)}({...t})},btnEliminarTarea=document.createElement("BUTTON"),btnEliminarTarea.classList.add("eliminar-tarea"),btnEliminarTarea.dataset.idTarea=t.id,btnEliminarTarea.textContent="Eliminar Tarea",btnEliminarTarea.ondblclick=function(){!function(t){Swal.fire({title:"¿Eliminar Tarea?",showCancelButton:!0,confirmButtonText:"Si",cancelButtonText:"No"}).then(a=>{a.isConfirmed&&async function(t){const{estado:a,id:o,nombre:r}=t,i=new FormData;i.append("id",o),i.append("estado",a),i.append("nombre",r),i.append("proyectoId",c());try{const a="http://localhost:3000/api/tarea/eliminar",o=await fetch(a,{method:"POST",body:i}),r=await o.json();r.resultado&&(Swal.fire("Eliminado",r.mensaje,"success"),e=e.filter(e=>e.id!==t.id),n())}catch(e){}}(t)})}({...t})},s.appendChild(btnEstadoTarea),s.appendChild(btnEliminarTarea),a.appendChild(d),a.appendChild(s);document.querySelector("#listado-tareas").appendChild(a)})}function o(t=!1,a={}){console.log(a);const o=document.createElement("DIV");o.classList.add("modal"),o.innerHTML=`\n            <form class="formulario nueva-tarea">\n                <legend>${t?"Editar Tarea":"Añade una nueva tarea"}</legend>\n                <div class="campo">\n                    <label>Tarea</label>\n                    <input \n                        type="text"\n                        name="tarea"\n                        placeholder="${t?"Editar la Tarea":"Añadir Tarea al Proyecto Actual"}"\n                        id="tarea"\n                        value="${t?a.nombre:""}"\n                    />\n                </div>\n                <div class="opciones">\n                    <input \n                    type="submit" \n                    class="submit-nueva-tarea" \n                    value="${t?"Guardar Cambios":"Añadir Tarea"}" />\n                    \n                    <button type="button" class="cerrar-modal">Cancelar</button>\n                </div>\n            </form>\n        `,setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},0),o.addEventListener("click",(function(d){if(d.preventDefault(),d.target.classList.contains("cerrar-modal")){document.querySelector(".formulario").classList.add("cerrar"),setTimeout(()=>{o.remove()},500)}if(d.target.classList.contains("submit-nueva-tarea")){const o=document.querySelector("#tarea").value.trim();if(""===o)return void r("El nombre de la tarea es obligatorio","error",document.querySelector(".formulario legend"));t?(a.nombre=o,i(a)):async function(t){const a=new FormData;a.append("nombre",t),a.append("proyectoId",c());try{const o="http://localhost:3000/api/tarea",i=await fetch(o,{method:"POST",body:a}),c=await i.json();if(console.log(c),r(c.mensaje,c.tipo,document.querySelector(".formulario legend")),"exito"===c.tipo){const a=document.querySelector(".modal");setTimeout(()=>{a.remove()},5e3);const o={id:String(c.id),nombre:t,estado:"0",proyectoId:c.proyectoId};e=[...e,o],n()}}catch(e){console.log(e)}}(o)}})),document.querySelector(".dashboard").appendChild(o)}function r(e,t,a){const n=document.querySelector(".alerta");n&&n.remove();const o=document.createElement("DIV");o.classList.add("alerta",t),o.textContent=e,a.parentElement.insertBefore(o,a.nextElementSibling),setTimeout(()=>{o.remove()},5e3)}async function i(t){const{estado:a,id:o,nombre:r,proyectoId:i}=t,d=new FormData;d.append("id",o),d.append("estado",a),d.append("nombre",r),d.append("proyectoId",c());try{const t="http://localhost:3000/api/tarea/actualizar",i=await fetch(t,{method:"POST",body:d}),c=await i.json();if("exito"===c.respuesta.tipo){Swal.fire(c.respuesta.mensaje,c.respuesta.mensaje,"success");const e=document.querySelector(".modal");e&&e.remove()}e=e.map(e=>(e.id===o&&(e.estado=a,e.nombre=r),e)),n()}catch(e){console.log(e)}}function c(){const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries()).id}document.querySelectorAll('#filtros input[type="radio"]').forEach(e=>{e.addEventListener("input",a)})}();