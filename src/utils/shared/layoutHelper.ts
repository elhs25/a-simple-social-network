// Special thanks to CSS-Tricks for these snippets - https://css-tricks.com/using-css-transitions-auto-dimensions/
// I made some changes for this project

export function collapseSection(element: HTMLElement, collapsedHeight = 0) {
  // get the height of the element's inner content, regardless of its actual size
  const sectionHeight = element.scrollHeight

  // temporarily disable all css transitions
  let elementTransition = element.style.transition
  element.style.transition = ''

  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function () {
    element.style.height = `${sectionHeight}px`
    element.style.transition = elementTransition

    requestAnimationFrame(function () {
      element.style.height = `${collapsedHeight}px`
    })
  })
}

export function expandSection(element: HTMLElement, offsetHeight = 0) {
  // get the height of the element's inner content, regardless of its actual size
  const sectionHeight = element.scrollHeight + offsetHeight

  // have the element transition to the height of its inner content
  element.style.height = `${sectionHeight}px`

  // when the next css transition finishes (which should be the one we just triggered)
  element.addEventListener('transitionend', function (e) {
    // remove this event listener so it only gets triggered once
    element.removeEventListener('transitionend', () => {})

    // remove "height" from the element's inline styles, so it can return to its initial value
    element.style.height = ''
  })
}
