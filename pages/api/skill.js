export default function skillTittle(req, res) {
    res.status(200).json([
        { id: 1, name: 'html', title: 'HTML', },
        { id: 2, name: 'css', title: 'CSS', },
        { id: 3, name: 'tail', title: 'Tailwind css', },
        { id: 4, name: 'js', title: 'JavaScript', },
        { id: 5, name: 'boo', title: 'Bootstrap', },
        { id: 6, name: 'react', title: 'React', },
        { id: 7, name: 'rest', title: 'Rest Api', },
    ])
}