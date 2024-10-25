
const mockUrls = [
    "https://utfs.io/f/zMK0CW8weW96GI3VaXclcnb0649MDarTqdPW7Hfgi52CVIsA",
    "https://utfs.io/f/zMK0CW8weW96XroqCNGryALtRsGh0mo8iaDnIUCWjQuBfv7K",
    "https://utfs.io/f/zMK0CW8weW96QjX34nMk2eyjrnNiAtguUX58L7Ez1qGZTxw4",
    "https://utfs.io/f/zMK0CW8weW96Aj3UKG7DQ7FJiNI3mcsMKD2BE8btXeYLPvlW",
    "https://utfs.io/f/zMK0CW8weW96Mgjr55EBEFnr092xp3R5CZD6JekiNqftuSUQ"
]

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url
}))
export default function HomePage() {
    return (
        <main className="">
            <div className="flex flex-wrap">
                {
                    mockImages.map((image) => (
                        <div key={image.id} className="w-1/2 p-4 gap-4">
                            <img src={image.url} alt={image.url} className="w-48" />
                        </div>
                    ))
                }
            </div>
            Hello (progress is work)
        </main>
    );
}
