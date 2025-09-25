// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Fungsi untuk menambah tugas baru
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Silakan masukkan tugas terlebih dahulu!");
            return;
        }

        // Membuat elemen list item (li) baru
        const li = document.createElement('li');

        // Membuat elemen span untuk teks tugas
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);
        
        // Membuat tombol hapus
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Hapus';
        deleteBtn.className = 'delete-btn';
        li.appendChild(deleteBtn);

        // Menambahkan list item baru ke dalam list (ul)
        taskList.appendChild(li);

        // Mengosongkan input field
        taskInput.value = "";
    }

    // Event listener untuk tombol 'Tambah'
    addTaskBtn.addEventListener('click', addTask);

    // Event listener untuk menekan tombol 'Enter' di input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Event listener untuk list (untuk menandai selesai dan menghapus)
    taskList.addEventListener('click', (event) => {
        // Menandai tugas sebagai selesai
        if (event.target.tagName === 'SPAN') {
            event.target.parentElement.classList.toggle('completed');
        }

        // Menghapus tugas
        if (event.target.classList.contains('delete-btn')) {
            event.target.parentElement.remove();
        }
    });
});
