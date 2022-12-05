function alertHello(){
    console.log("Hellow World")
}

// document.addEventListener('DOMContentLoaded', (event) => {

//     function handleDragStart(e) {
//         this.style.opacity = '0.4';
//         dragSrcEl = this;

//         this.classList.remove('card-moving');
//         this.classList.remove('not-empty-card');
//         this.classList.add('empty-card');

//         e.dataTransfer.effectAllowed = 'move';
//         e.dataTransfer.setData('text/html', this.innerHTML);
//     }

//     function handleDragEnd(e) {
//         this.style.opacity = '1';

//         items.forEach(function (item) {
//             item.classList.remove('over');
//         });
//         this.classList.add('empty-card');
//     }

//     function handleDragOver(e) {
//         e.preventDefault();
//         return false;
//     }

//     function handleDragEnter(e) {
//         this.classList.add('over');
//         this.classList.remove('empty-card');
//         // this.classList.toggle('hidden');
//     }

//     function handleDragLeave(e) {
//         this.classList.remove('over');
//         this.classList.add('empty-card');
//     }

//     function handleDrop(e) {
//         e.stopPropagation(); // stops the browser from redirecting.
//         if (dragSrcEl !== this) {
//             dragSrcEl.innerHTML = this.innerHTML;
//             this.innerHTML = e.dataTransfer.getData('text/html');
//         }
//         this.classList.remove('hidden');
//         this.classList.remove('empty-card');
//         this.classList.remove('card-moving');
//         this.classList.add('not-empty-card');                
        
        
//         return false;
//     }
    

//     let items = document.querySelectorAll('.column-wrapper .card-item');
//     items.forEach(function (item) {
//         item.addEventListener('dragstart', handleDragStart);
//         item.addEventListener('dragover', handleDragOver);
//         item.addEventListener('dragenter', handleDragEnter);
//         item.addEventListener('dragleave', handleDragLeave);
//         item.addEventListener('dragend', handleDragEnd);
//         item.addEventListener('drop', handleDrop);
//     });
// });

// $(document).ready(function () {
//     var max_fields = 2;
//     var wrapper = $(".card-categories");
//     var add_button1 = $(".not-empty-card .btn1");

//     var x = 1;
//     $(add_button1).click(function (e) {
//         e.preventDefault();
//         if (x < max_fields) {
//             x++;
//             $(wrapper).append(
//                 '<div class="new-fields position-relative"><input type="text" class="empty-field" value=""> <a href="#" class="delete position-absolute">X</a></div>'
//             ); //add input box
//         } else {
//             alert('You Reached the limits')
//         }
//     });

//     $(wrapper).on("click", ".delete", function (e) {
//         e.preventDefault();
//         $(this).parent('div').remove();
//         x--;
//     })
// });