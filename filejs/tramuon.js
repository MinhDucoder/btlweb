const btn_open = document.getElementById('btn-open');
        const btn_close = document.getElementById('btn-close');
        const modal_container = document.getElementById('modal-container');
        
        btn_open.addEventListener('click', () => {
            modal_container.classList.add('show');
        })

        btn_close.addEventListener('click', () => {
            modal_container.classList.remove('show');
        })

        const modal_form = document.getElementById("modal-form");
        const table_body = document.querySelector("table tbody");

        modal_form.addEventListener("submit", function(event) {
            event.preventDefault();

            const tensv = document.getElementById("tensv").value;
            const masv = document.getElementById("masv").value;
            const tensach = document.getElementById("tensach").value;
            const ngaymuon = document.getElementById("ngaymuon").value;
            const ngaytra = document.getElementById("ngaytra").value;
			var studentIdRegex = /^\d+$/;

            if (!tensv || !masv || !tensach || !ngaymuon || !ngaytra) {
                window.alert("Vui lòng điền đầy đủ thông tin!");
                return;
            }

			if (!masv.match(studentIdRegex)) {
                event.preventDefault();
                window.alert("Mã sinh viên chỉ được chứa ký tự số!");
            } 

            const newRow = table_body.insertRow();
            newRow.insertCell(0).textContent = table_body.rows.length;
            newRow.insertCell(1).textContent = tensv;
            newRow.insertCell(2).textContent = masv;
            newRow.insertCell(3).textContent = tensach;
            newRow.insertCell(4).textContent = ngaymuon;
            newRow.insertCell(5).textContent = ngaytra;

            
        });