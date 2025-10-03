import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const search = async (req, res) => {
  const { q } = req.query;
  try {
    const ytUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=9&q=${encodeURIComponent(
      q
      // eslint-disable-next-line no-undef
    )}&key=${process.env.YOUTUBE_API_KEY}`;
    const ytRes = await axios.get(ytUrl);
    const youtube = ytRes.data.items.map((it) => ({
      externalId: it.id.videoId,
      title: it.snippet.title,
      description: it.snippet.description,
      thumbnail: it.snippet.thumbnails?.high?.url,
      externalLink: `https://www.youtube.com/watch?v=${it.id.videoId}`,
      type: "video",
    }));

    const booksUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      q
    )}&maxResults=9`;
    const bookRes = await axios.get(booksUrl);
    const books = (bookRes.data.items || []).map((it) => ({
      externalId: it.id,
      title: it.volumeInfo.title,
      description: it.volumeInfo.description,
      thumbnail: it.volumeInfo.imageLinks?.thumbnail,
      externalLink: it.volumeInfo.previewLink,
      type: "book",
    }));

    res.json({ youtube, books });
  } catch (err) {
    if (err.response && err.response.status === 429) {
      return res
        .status(429)
        .json({ error: "API rate limit exceeded. Please try again later." });
    }
    res.status(500).json({ error: err.message });
  }
};

export default search;
