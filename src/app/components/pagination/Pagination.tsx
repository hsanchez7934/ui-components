// interface Props {
//     children: any
// }

// @ts-expect-error generic
export default function PaginationComponent(props) {
    console.log(props)
    return <div>pagination</div>
}
