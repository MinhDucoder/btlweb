// Mảng để lưu trữ thông tin sách
const books = [];

// Lấy các phần tử DOM cần sử dụng
const bookList = document.getElementById("book-list");

// Hàm để thêm sách vào mảng books
function addBook(title, type, amount, state, cost, author, NXB) {
    const book = {
        title,
        type,
        amount,
        state,
        cost,
        author,
        NXB
    };
    books.push(book);
}

// Thêm các cuốn sách vào danh sách ban đầu
    addBook("360 Động Từ Bất Quy Tắc Và Cách Dùng Các Thì", "Sách Tiếng Anh", 30, "có sẵn", 30000, "Trần Mạnh Tường", "NXB Văn hóa - Thông tin");
    addBook("Biến Bất Kỳ Ai Thành Khách Hàng", "Sách hướng dẫn", 18, "có sẵn", 50000, "C.J.Hayden", "NXB Lao động - Xã hội");
    addBook("Chỉ Cần Mẩu Khăn Giấy", "Tiểu thuyết", 25, "chờ giao", 40000, "Dan Roam", "Nhà Xuất Bản Trẻ",);
    addBook("Thất Bại Để Thành Công", "Truyền cảm hứng", 25, "có sẵn", 70000, "Nhiều tác giả", "Nhà Xuất Bản Thế Giới")
    addBook("Chinh Phuc Mục Tiêu", "Truyền cảm hứng", 15,"có sẵn", 60000, "Brian Tracy", "First News")
    addBook("Cho Tôi Xin Một Vé Đi Tuổi Thơ", "Sách tuổi thơ", 30, "có sẵn", 25000, "Nguyễn Nhật Ánh", "Nhà Xuất Bản Trẻ")
    addBook("Dám Nghĩ Lớn", "Truyền cảm hứng", 10, "đang cho mượn", 80000, "David J. Schwartz. Ph.D", "Nhà Xuất Bản Trẻ")
    addBook("Đắc Nhân Tâm", "Đạo lý", 15, "có sẵn", 60000, "Dale Carnegie", "NXB Tổng Hợp Hồ Chí Minh")
    addBook("Dám Thất Bại", "Truyền cảm hứng", 5, "chờ giao", 20000, "Billi P.S. Lim", "Nhà Xuất Bản Trẻ")
    addBook("Hơn Cả Khởi Nghiệp 2.0", "Truyền cảm hứng", 10, "đang cho mượn", 70000, "Jim Collins, Bill Lazier", "Nhà Xuất Bản Trẻ")
    addBook("Hướng Dẫn Chẩn Đoán Và Điều Trị Bệnh Da Liễu", "Sách hướng dẫn", 10, "có sẵn", 15000, "Nguyễn Trọng Hào", "Nhà Xuất Bản Y Học")
    addBook("Bộ Não Phập Phồng", "Châm biếm", 15, "chờ giao", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ")
    addBook("Cơ Thể Chúng Ta", "Khám phá", 20, "đang cho mượn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ")
    addBook("Cây Xanh Đành Hanh", "Truyện tranh", 15, "có sẵn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ")
    addBook("Côn Trùng Gớm Ghiếc", "Thế giới động vật", 15, "có sẵn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ")
    addBook("Âm Thanh Kinh Hồn", "Kinh dị", 20, "có sẵn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ")
    addBook("Thiên Nhiên Hoang Dã", "Khám phá thế giới", 15, "có sẵn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ")
    addBook("Vật Lý Câu Chuyện Của Những Lực Bí Hiểm", "Tâm linh", 25, "có sẵn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ")
    addBook("Vi Sinh Vật Vi Tính", "Khám phá thế giới", 30, "có sẵn", 15000, "Nick Arnold, Tony De Saulles", "Nhà Xuất Bản Trẻ")
    addBook("Hành Trình Về Phương Đông", "Truyền cảm hứng", 20,"đang cho mượn", 100000, "Baird T.Spalding", "Hồng Đức")
    addBook("Khác Biệt Hay Là Chết", "Truyền cảm hứng", 25, "có sẵn", 150000, "Jack Trout, Steve Rivkin", "Nhà Xuất Bản Trẻ")
    addBook("Kinh Nghiệm Thành Công Của Ông Chủ Nhỏ", "Truyền cảm hứng", 25, "chờ giao", 65000, "Lão Mạc", "Nhà Xuất Bản Phụ Nữ")
    addBook("Nghệ Thuật Lấy Lòng Khách Hàng", "Tâm lý", 25, "có sẵn", 40000, "Michael J. Maher", "Nhà Xuất Bản Thế Giới")
    addBook("Sinh Ra Để Chạy", "Truyền cảm hứng", 20, "chờ giao", 25000, "Christopher McDougall", "Nhà Xuất Bản Thế Giới")
    addBook("Tôi Tài Giỏi, Bạn Cũng Thế", "Truyền cảm hứng", 25, "có sẵn", 360000, "Adam Khoo", "Nhà Xuất Bản Phụ Nữ")
    addBook("Từ Tơ Lụa Đến Silicon", "Truyền cảm hứng", 10, "có sẵn", 200000, "Jeffrey E. Garter", "Nhà Xuất Bản Trẻ")
    addBook("Vĩ Đại Do Lựa Chọn", "Truyền cảm hứng", 30, "có sẵn", 100000, "Nhà Xuất Bản Trẻ")
    addBook("Xây Dựng Để Trường Tồn", "Truyền cảm hứng", 15, "có sẵn", 80000, "Jim Collins, Jerry I. Porras", "Nhà Xuất Bản Trẻ")
    addBook("Đừng Lựa Chọn An Nhàn Khi Còn Trẻ", "Đạo lý", 25, "có sẵn", 60000, "Cảnh Thiên", "Nhà Xuất Bản Thế Giới")
    addBook("Vượt Bẫy Cảm Xúc", "Truyền cảm hứng", 30, "có sẵn", 30000, "Susan David", "First News")

// Hàm để hiển thị danh sách sách

function displayBooks() {
    bookList.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${book.title}</td>
            <td>${book.type}</td>
            <td>${book.amount}</td>
            <td>${book.state}</td>
            <td>${book.cost}</td>
            <td>${book.author}</td>
            <td>${book.NXB}</td>
            <td><button onclick="deleteBook(this)">Xóa</button></td>
        `;
        bookList.appendChild(row);
    }
}
// Gọi hàm hiển thị danh sách sách
displayBooks();
// Hàm để xóa sách
function deleteBook(button) {
    const rowIndex = button.parentNode.parentNode.rowIndex;
    books.splice(rowIndex - 1, 1); 
    displayBooks(); 
}
const searchTitleInput = document.getElementById("search-title");
const searchTypeInput = document.getElementById("search-type");
const searchStateInput = document.getElementById("search-state");
const searchCostInput = document.getElementById("search-cost");
const searchAuthorInput = document.getElementById("search-author");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function () {
    const searchTextTitle = searchTitleInput.value.toLowerCase();
    const searchTextType = searchTypeInput.value.toLowerCase();
    const searchTextState = searchStateInput.value.toLowerCase();
    const searchNumberCost = parseFloat(searchCostInput.value);
    const searchTextAuthor = searchAuthorInput.value.toLowerCase();
    
    // Tạo mảng mới để lưu trữ kết quả tìm kiếm
    const searchResults = books.filter(book => {
        // So sánh tên sách và tên tác giả (chuyển đổi thành chữ thường)
        const titleMatch = book.title.toLowerCase().includes(searchTextTitle);
        const typeMatch = book.type.toLowerCase().includes(searchTextType);
        const stateMatch = book.state.toLowerCase().includes(searchTextState);
        const costMatch = isNaN(searchNumberCost) || book.cost === searchNumberCost;
        const authorMatch = book.author.toLowerCase().includes(searchTextAuthor);
        // Trả về true nếu cả hai điều kiện đều đúng
        return titleMatch &&typeMatch &&stateMatch &&costMatch && authorMatch ;
    });
    
    // Hiển thị danh sách kết quả tìm kiếm
    displaySearchResults(searchResults);
});

// Hàm để hiển thị kết quả tìm kiếm
function displaySearchResults(results) {
    bookList.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
        const book = results[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${i+1}</td>
            <td>${book.title}</td>
            <td>${book.type}</td>
            <td>${book.amount}</td>
            <td>${book.state}</td>
            <td>${book.cost}</td>
            <td>${book.author}</td>
            <td>${book.NXB}</td>
            <td><button onclick="deleteBook(this)">Xóa</button></td>
        `;
        bookList.appendChild(row);
    }
}
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");
const resetSearchButton = document.getElementById("reset-search");

function displaySearchResults(results) {
    bookList.innerHTML = "";
    
    if (results.length === 0) {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
        for (let i = 0; i < results.length; i++) {
            // Hiển thị kết quả tìm kiếm
            const book = results[i];
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${i+1}</td>
                <td>${book.title}</td>
                <td>${book.type}</td>
                <td>${book.amount}</td>
                <td>${book.state}</td>
                <td>${book.cost}</td>
                <td>${book.author}</td>
                <td>${book.NXB}</td>
                <td><button onclick="deleteBook(this)">Xóa</button></td>
            `;
            bookList.appendChild(row);
        }
    }
}

closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
});

resetSearchButton.addEventListener("click", function () {
    modal.style.display = "none";
    searchTitleInput.value = "";
    searchTypeInput.value = "";
    searchStateInput.value = "";
    searchCostInput.value = "";
    searchAuthorInput.value = "";
    // Hiển thị danh sách sách ban đầu
    displayBooks();
});


displayBooks();