<template>
  <div @dragover.prevent @drop.prevent>
    <div
      class="content-wrapper"
      @dragleave="fileDragOut"
      @dragover="fileDragIn"
      @drop="handleFileDrop"
    >
      Drag and drop here
      <br />
      or
      <br />
      <input
        type="file"
        name="file-input"
        multiple="True"
        @change="handleFileInput"
        class="brand_blue file-input pointer"
        accept=".xls, .xlsx"
      />
      <label for="file-input" class="brand_blue pointer">Browse files</label>
      <ul>
        <li v-for="(file, index) in files" :key="index" class="font-12">
          {{ file.name }} ({{ file.size }} b)
          <button @click="removeFile(index)" title="Remove" class="brand_red">
            X
          </button>
        </li>
      </ul>
    </div>
    <span class="font-12 color_grey_dark"
      >Accepted file types: .xls and .xlsx</span
    >
    <p class="font-13 color_grey_dark mb-4">
      For a better experience:
      <span class="brand_blue">Use this Excel format</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "DragDropInput",
  data() {
    return {
      files: [],
      color: "#444444",
    };
  },
  methods: {
    handleFileDrop(e) {
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      [...droppedFiles].forEach((f) => {
        this.files.push(f);
      });
      this.color = "#444444";
    },
    handleFileInput(e) {
      let files = e.target.files;
      files = e.target.files;
      if (!files) return;
      [...files].forEach((f) => {
        this.files.push(f);
      });
    },
    removeFile(fileKey) {
      this.files.splice(fileKey, 1);
    },
    fileDragIn() {
      this.color = "white";
    },
    fileDragOut() {
      this.color = "#444444";
    },
  },
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  border: 2px dashed #abb5be;
  max-width: 287px;
  min-height: 127px;
  background: #f1f1f1;
  padding-top: 27px;
  padding-bottom: 27px;
}

.file-input {
  opacity: 0;
  position: absolute;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
