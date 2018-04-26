export function setEditorDate(day) {
  return {
    type: 'SET_EDITOR_DATE',
    day
  }
}

export function openEditor(){
  return {
    type: 'OPEN_EDITOR',
    editorOpen: true
  }
}

export function closeEditor(){
  return {
    type: 'OPEN_EDITOR',
    editorOpen: false
  }
}

