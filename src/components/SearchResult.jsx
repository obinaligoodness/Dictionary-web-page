import { useGetDictionaryQuery } from "@/store/slice/apiSlice";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const SearchResult = ({ search }) => {
    const { data } = useGetDictionaryQuery(search)
    console.log(data, "here is the search result")

    const playAudio = (audioUrl) => {
        if (audioUrl) {
            new Audio(audioUrl).play();
        }
    };

    return (
        <div className="py-6">
            {data &&
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-4">

                            <div className="text-4xl md:text-7xl lg:text-6xl font-semibold">{data[0]?.word}</div>
                            <div className="text-[#aa74da] text-3xl">{data[0]?.phonetic}</div>

                        </div>
                        
                        {data[0]?.phonetics?.find(p => p.audio) && (
                            <button
                                onClick={() => playAudio(data[0]?.phonetics?.find(p => p.audio)?.audio)}
                                className="px-3 py-1 bg-[#e9d0fa] h-20 w-20 text-white rounded-full cursor-pointer"
                            >
                                <PlayArrowIcon className="text-[purple]" sx={{ fontSize: "60px" }} />
                            </button>
                        )}

                    </div>
                    {data[0]?.meanings?.map((meaning, index) => {
                        return (
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="font-semibold text-xl italic">{meaning.partOfSpeech}</span>
                                    <hr className="flex-grow border-t border-gray-300" />
                                </div>

                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="text-[#8b8b8b] text-xl">Meaning</div>
                                    <ul className="pl-5 space-y-2">
                                        {meaning?.definitions?.map((definition, index) => (
                                            <li
                                                key={index}
                                                className="relative pl-6 before:content-['•'] before:text-purple-600 before:absolute before:left-0 before:top-1"
                                            >
                                                {definition.definition}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {meaning?.synonyms.length > 0 && (
                                    <div className="flex flex-col gap-2">
                                        <div className="text-[#8b8b8b] text-xl">Synonyms</div>
                                        <div className="flex flex-wrap gap-2">
                                            {meaning?.synonyms?.map((item, index) => (
                                                <span key={index} className="text-[#9a4fd4] font-semibold text-xl">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}


                                {meaning?.antonyms.length > 0 &&
                                    <div className="flex flex-col gap-2">
                                        <div className="text-[#8b8b8b] text-xl">Synonyms</div>
                                        <div className="flex flex-wrap gap-2">
                                            {meaning?.antonyms?.map((item, index) => (
                                                <span key={index} className="text-[#9a4fd4] font-semibold text-xl">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })}
                    <hr className="flex-grow border-t border-gray-300" />
                    <div className="flex gap-4">
                        <div>source</div>
                        <div className="flex gap-4">{data[0]?.sourceUrls?.map((item) => {
                            return (
                                <a href={item}>{item}</a>)
                        })}</div>
                    </div>
                </div>

            }
        </div>
    )
}
export default SearchResult;