const useCombinedRefs = (...refs) => {
    return (node) => {
        refs.forEach((ref) => {
            if (!ref) {
                return
            }
            else if (typeof ref === 'function') {
                ref(node);
            }
            else {
                ref.current = node;
            }
        })
    }
}

export default useCombinedRefs;