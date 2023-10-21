<script>
        const btn_open = document.getElementById('btn-open');
        const btn_close = document.getElementById('btn-close');
        const modal_container = document.getElementById('modal-container');
        
        btn_open.addEventListener('click', ()=>{
            // add class show
            modal_container.classList.add('show');
        })

        btn_close.addEventListener('click', ()=>{
            // add class show
            modal_container.classList.remove('show');
        })
    </script>