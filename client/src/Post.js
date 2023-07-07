export default function Post(){
    return(
        <div className="post">
        <div className="image">
        <img src="https://picsum.photos/1920/1080" />        
        </div>
        <div className="text">
          <h2>Full House Battery Backup</h2>
          <p className="info">
            <span className="author">Abhishek Macwan</span>
            <time>2023-07-07 5:05pm</time>
          </p>
          <p className="summary">Are you tired of power outages and want to ensure uninterrupted electricity supply for your entire house? In this blog post, we explore the concept of full house battery backup powered by solar energy...</p>
        </div>
      </div>
    );
}