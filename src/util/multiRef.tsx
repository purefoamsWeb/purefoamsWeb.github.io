export default function multiRef() {
    let currentRefs : any[] = [];

    function getRefs() {
        if (typeof document === "undefined") {
            console.error("do not run on this server !!!!");
        } else {
            return currentRefs.filter((ref) => {
                return document.contains(ref);
            })
        }
    }

    function addRef(ref: any) {
        if (ref != null) {
            currentRefs.push(ref);
        }
    }

    return [getRefs, addRef];
}