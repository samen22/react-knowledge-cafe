import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 pt-4 m-4 ml-4'>
            <div className='text-xl bg-slate-200 border-cyan-200 p-2 m-2'>
                <h3>Reading Time: {readingTime} mins</h3>
            </div>
            <h2 className='text-3xl text-center mb-2'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number
}

export default Bookmarks;