avatar.onchange = evt => {
  const [file] = avatar.files
  if (file) {
    previewAvatar.src = URL.createObjectURL(file)
  }
}