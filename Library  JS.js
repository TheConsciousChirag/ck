function toggleContent(optionNumber) {
  const contentElement = document.getElementById(`content${optionNumber}`);
  contentElement.style.display = contentElement.style.display === 'none' ? 'block' : 'none';
}
