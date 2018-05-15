const alwaysAllow = (evt) => {
  const keyCode = evt.keyCode || evt.which
  const shiftKey = evt.shiftKey || false

  return (!shiftKey && (keyCode === 9 || keyCode === 8 || keyCode === 46 || (keyCode >= 35 && keyCode <= 40)))
}

const isNumber = (evt) => {
  const keyCode = evt.keyCode || evt.which
  const shiftKey = evt.shiftKey || false

  return (!shiftKey && keyCode >= 48 && keyCode <= 57)
}

const isLetter = (evt) => {
  const keyCode = evt.keyCode || evt.which

  return (keyCode >= 65 && keyCode <= 90)
}

const isUnderscore = (evt) => {
  const keyCode = evt.keyCode || evt.which
  const shiftKey = evt.shiftKey || false

  return (keyCode === 189 && shiftKey)
}

const isEmailCharacter = (evt) => {
  const keyCode = evt.keyCode || evt.which
  const shiftKey = evt.shiftKey || false

  // Valid Email Characters:  @+.!#$%&'*-/=?^_`{|}~
  const allowed = [106, 107, 109, 110, 111, 187, 189, 190, 191, 192, 222]
  const allowedShift = [49, 50, 51, 52, 53, 54, 55, 56, 187, 189, 191, 192, 219, 220, 221]

  return ((allowed.indexOf(keyCode) !== -1 && !shiftKey) || (allowedShift.indexOf(keyCode) !== -1 && shiftKey))
}

const validUsernameCharacter = (evt) => {
  return (alwaysAllow(evt) || isLetter(evt) || isNumber(evt) || isUnderscore(evt))
}

const validEmailCharacter = (evt) => {
  return (alwaysAllow(evt) || isLetter(evt) || isNumber(evt) || isEmailCharacter(evt))
}

/**
 * Only allow input characters that are Numbers
 */
export const Numbers = {
  bind (el, binding, vnode) {
    if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
      var els = el.getElementsByTagName('input')
      if (els.length === 1) {
        el = els[0]
      }
    }

    el.onkeydown = function (evt) {
      if (!alwaysAllow(evt) && !isNumber(evt)) {
        event.preventDefault()
        return false
      }
    }
  }
}

/**
 * Only allow input characters that are Numbers
 */
export const AlphaNumeric = {
  bind (el, binding, vnode) {
    if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
      var els = el.getElementsByTagName('input')
      if (els.length === 1) {
        el = els[0]
      }
    }

    el.onkeydown = function (evt) {
      if (!alwaysAllow(evt) && !isNumber(evt) && !isLetter(evt)) {
        event.preventDefault()
        return false
      }
    }
  }
}

/**
 * Only allow input characters that are Letters
 */
export const Alpha = {
  bind (el, binding, vnode) {
    if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
      var els = el.getElementsByTagName('input')
      if (els.length === 1) {
        el = els[0]
      }
    }

    el.onkeydown = function (evt) {
      if (!alwaysAllow(evt) && !isLetter(evt)) {
        event.preventDefault()
        return false
      }
    }
  }
}

/**
 * Only allow input characters used for Usernames
 */
export const Username = {
  bind (el, binding, vnode) {
    if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
      var els = el.getElementsByTagName('input')
      if (els.length === 1) {
        el = els[0]
      }
    }

    el.onkeydown = function (evt) {
      if (!validUsernameCharacter(evt)) {
        evt.preventDefault()
        return false
      }
    }
  }
}

/**
 * Only allow input characters used for Email Addresses
 */
export const EmailAddress = {
  bind (el, binding, vnode) {
    if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
      var els = el.getElementsByTagName('input')
      if (els.length === 1) {
        el = els[0]
      }
    }

    el.onkeydown = function (evt) {
      if (!validEmailCharacter(evt)) {
        evt.preventDefault()
        return false
      }
    }
  }
}

/**
 * Only allow input characters used for Email Addresses
 */
export const Mixed = {
  bind (el, binding, vnode) {
    if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
      var els = el.getElementsByTagName('input')
      if (els.length === 1) {
        el = els[0]
      }
    }

    el.onkeydown = function (evt) {
      if (!validUsernameCharacter(evt) && !validEmailCharacter(evt)) {
        evt.preventDefault()
        return false
      }
    }
  }
}
