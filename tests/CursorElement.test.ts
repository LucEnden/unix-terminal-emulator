import CursorElement from "../src/CursorElement"

test("Append => expect cursor to be in the document after append", () => {
    const cursorChar = "|"
    const cursorId = "cursor_id"
    const cursorCss = "cursor_class"
    
    const cursor = new CursorElement(cursorChar, cursorId, cursorCss)
    const wrapper = document.createElement("div")
    document.body.appendChild(wrapper)
    cursor.Append(wrapper)

    // expect(document.getElementById(cursorId)).not.toBeNull()
    expect(wrapper.hasChildNodes()).toBeTruthy()
})

test("Append + Remove => expect cursor not to be in the document after remove", () => {
    const cursorChar = "|"
    const cursorId = "cursor_id"
    const cursorCss = "cursor_class"
    
    const cursor = new CursorElement(cursorChar, cursorId, cursorCss)
    const wrapper = document.createElement("div")
    document.body.appendChild(wrapper)
    cursor.Append(wrapper)
    cursor.Remove()

    expect(wrapper.hasChildNodes()).toBeFalsy()
})

test("constructor => expect cursor to not have a class if it not specified or of length 0", () => {
    const cursorChar = "|"
    const cursorIdCssOfLength0 = "cursor_id_cursorIdCssOfLength0"
    const cursorIdCssUndefined = "cursor_id_cursorIdCssUndefined"
    const cursorCssOfLength0 = ""
    
    const cursorWithCssLength0 = new CursorElement(cursorChar, cursorIdCssOfLength0, cursorCssOfLength0)
    const wrapperWithCssLength0 = document.createElement("div")
    document.body.appendChild(wrapperWithCssLength0)
    cursorWithCssLength0.Append(wrapperWithCssLength0)    
    const cursorWithCssUndefined = new CursorElement(cursorChar, cursorIdCssUndefined)
    const wrapperWithCssUndefined = document.createElement("div")
    document.body.appendChild(wrapperWithCssUndefined)
    cursorWithCssUndefined.Append(wrapperWithCssUndefined)

    expect(document.getElementById(cursorIdCssOfLength0)).not.toBeNull()
    expect(document.getElementById(cursorIdCssUndefined)).not.toBeNull()
    expect(document.getElementById(cursorIdCssOfLength0)?.classList.length).toEqual(0)
    expect(document.getElementById(cursorIdCssUndefined)?.classList.length).toEqual(0)
})