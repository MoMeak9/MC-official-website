export const isMobile = () => {
    return !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)
}

export default {
    isMobile
}
