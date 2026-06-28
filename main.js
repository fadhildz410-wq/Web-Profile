class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // ==========================================
  // PROSES INSERT & HEAPIFY UP
  // ==========================================
  insert(value) {
    console.log(`\n[INSERT] Memasukkan angka: ${value}`);
    this.heap.push(value);
    console.log(` -> Array awal: [ ${this.heap.join(', ')} ] (Data masuk di ujung kanan)`);
    
    // Perbaiki posisi elemen yang baru masuk (elemen paling akhir)
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    let parent = Math.floor((index - 1) / 2);
    
    while (index > 0 && this.heap[index] > this.heap[parent]) {
      console.log(`    [HEAPIFY UP] Oop! Anak (${this.heap[index]}) lebih besar dari Bapaknya (${this.heap[parent]}). TUKAR!`);
      
      // Swap!
      [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
      console.log(`    -> Array jadi: [ ${this.heap.join(', ')} ]`);
      
      // Pindah pointer ke atas untuk cek lagi
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }

    if (index === 0) {
        console.log(`    [SELESAI] Angka sudah sampai di Root (puncak).`);
    } else {
        console.log(`    [SELESAI] Posisi sudah benar, tidak ada yang ditukar.`);
    }
  }

  // ==========================================
  // PROSES EXTRACT MAX & HEAPIFY DOWN
  // ==========================================
  extractMax() {
    console.log(`\n[EXTRACT] Meminta nilai terbesar (selalu di Root)...`);
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    const lastElement = this.heap.pop();
    
    // Pindahkan elemen paling belakang ke posisi root
    this.heap[0] = lastElement; 
    console.log(` -> Root (${max}) diambil! Elemen terakhir (${lastElement}) dipindah ke Root menggantikannya.`);
    console.log(` -> Array saat ini: [ ${this.heap.join(', ')} ]`);
    
    // Perbaiki posisinya ke bawah
    this.heapifyDown(0);
    
    return max;
  }

  heapifyDown(index) {
    let largest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    console.log(`    [HEAPIFY DOWN] Mengecek Node ${this.heap[index]} dengan anak-anaknya...`);

    // Cek anak kiri
    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      console.log(`      - Anak KIRI (${this.heap[left]}) lebih besar dari Root.`);
      largest = left;
    }
    // Cek anak kanan
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      console.log(`      - Anak KANAN (${this.heap[right]}) lebih besar dari Root/Kiri.`);
      largest = right;
    }

    // Jika ada anak yang lebih besar, tukar!
    if (largest !== index) {
      console.log(`    [TUKAR] Node ${this.heap[index]} bertukar posisi dengan Anak terbesarnya (${this.heap[largest]}).`);
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      console.log(`    -> Array jadi: [ ${this.heap.join(', ')} ]`);
      
      // Lanjut rekursif merosot ke bawah
      this.heapifyDown(largest); 
    } else {
      console.log(`    [SELESAI] Node ${this.heap[index]} sudah lebih besar dari anak-anaknya. Posisi aman!`);
    }
  }
}

// ==========================================
// DEMO UNTUK PRESENTASI (Tinggal di-Run)
// ==========================================
const myHeap = new MaxHeap();

myHeap.insert(10);
myHeap.insert(20);
myHeap.insert(30);
myHeap.insert(70);
myHeap.insert(100);
myHeap.insert(15);
myHeap.insert(90);
myHeap.insert(35);

// Coba extract
myHeap.extractMax();