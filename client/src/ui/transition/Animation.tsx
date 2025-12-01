import Lottie from 'react-lottie-player'
function Animation({
    animation,
    width = 150,
    height = 150
}: {
    animation: object // JSON animation data
    width?: number
    height?: number
}) {
    return (
        <Lottie
            loop
            animationData={animation}
            play
            style={{ width, height }}
        />
    )
}
export default Animation