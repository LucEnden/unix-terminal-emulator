import CursorElement from "../src/core/UnixCursorElement"

test("Append => expect cursor to be in the document after append", () => {
    const cursorChar = "|"
    const cursorCss = "cursor_class"
    
    const cursor = new CursorElement({ cursorChar, cursorCss })
    const wrapper = document.createElement("div")
    document.body.appendChild(wrapper)
    cursor.append(wrapper)

    // expect(document.getElementById(cursorId)).not.toBeNull()
    expect(wrapper.hasChildNodes()).toBeTruthy()
})

test("Append + Remove => expect cursor not to be in the document after remove", () => {
    const cursorChar = "|"
    const cursorCss = "cursor_class"
    
    const cursor = new CursorElement({ cursorChar: cursorChar, cursorCss: cursorCss })
    const wrapper = document.createElement("div")
    document.body.appendChild(wrapper)
    cursor.append(wrapper)
    cursor.remove()

    expect(wrapper.hasChildNodes()).toBeFalsy()
})

test("constructor => expect cursor to not have a class only if it is specified or the length of the classname is greater then 0", () => {
    const cursorChar = "|"
    const cursorCssDefined = "cursor_id_cursorIdCssDefined"
    const cursorCssOfLength0 = ""
    
    const cursorWithCssLength0 = new CursorElement({ cursorChar: cursorChar, cursorCss: cursorCssOfLength0 })
    // const cursorWithCssLength0 = new CursorElement(cursorChar, cursorIdCssOfLength0, cursorCssOfLength0)
    const wrapperWithCssLength0 = document.createElement("div")
    document.body.appendChild(wrapperWithCssLength0)
    cursorWithCssLength0.append(wrapperWithCssLength0)    
    const cursorWithCssDefined = new CursorElement({ cursorChar: cursorChar, cursorCss: cursorCssDefined })
    const wrapperWithCssDefined = document.createElement("div")
    document.body.appendChild(wrapperWithCssDefined)
    cursorWithCssDefined.append(wrapperWithCssDefined)

    expect(wrapperWithCssLength0.firstElementChild).not.toBeNull()
    expect(wrapperWithCssDefined.firstElementChild).not.toBeNull()
    expect(wrapperWithCssLength0.firstElementChild?.classList.length).toEqual(0)
    expect(wrapperWithCssDefined.firstElementChild?.classList.length).toEqual(1)
})