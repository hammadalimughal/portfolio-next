const blogs = [
    {
        id: 1,
        date: "26 December 2016",
        title: "What is a Blog Anyway?",
        cardtext: `Let’s start with the basics. What exactly is a blog?The word “blog” is a contraction of “weblog”—that’s “web log” not “we blog”! The earliest `,
        body: `<p>Let’s start with the basics. What exactly is a blog?</p><p>The word “blog” is a contraction of “weblog”—that’s “web log” not “we blog”!</p><p>The earliest blogs were online diaries, or logs, beginning in 1993. During the rest of the 1990s, personal blogging gradually became popular, with the term “weblog” being coined in 1997. Before that, what we now call blogs were called online journals or online diaries.</p><p>Up until 1998, bloggers needed a lot of technical skills. But in 1998, The Open Diary launched. It was the first blogging platform, and it was followed in 1999 by Blogger and LiveJournal—both of which are still going strong today.</p><p>WordPress came on the scene in 2003, built by two college students, Matt Mullenweg and Mike Little. After that, things moved fast:</p><ul><li>2003 – Blogs started to be monetized through ads, with Google’s newly launched AdSense</li><li>2004 – “Blog” was Merriam-Webster’s word of the year</li><li>2005 – YouTube and video blogging began</li><li>2006 – Huffington Post and BuzzFeed launched, bringing together news (factual content) and blogging (opinion-based content)</li><li>2007 – Twitter (and “micro-blogging”) took off</li><li>2009 – The White House launched its blog</li><li>2012 – Medium was launched, offering another way for bloggers to publish content online</li><li>2015 – LinkedIn’s blogging platform, Pulse, became available to all users</li><li>2016 – WordPress launched the “.blog” domain extension</li></ul><p><span>Thanks for showing your interest</span></p>`
    },
    {
        id: 2,
        date: "26 December 2016",
        title: "What is Lorem Ipsum?",
        cardtext: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
        body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><span>Thanks for showing your interest</span></p>`
    },
    {
        id: 3,
        date: "26 December 2016",
        title: "Why do we use it?",
        cardtext: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum`,
        body: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><span>Thanks for showing your interest</span></p>`
    },
    {
        id: 4,
        date: "26 December 2016",
        title: "Where does it come from?",
        cardtext: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
        body: `<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><p><span>Thanks for showing your interest</span></p>`
    },
    {
        id: 5,
        date: "26 December 2016",
        title: "What is a Blog Anyway?",
        cardtext: `Let’s start with the basics. What exactly is a blog?The word “blog” is a contraction of “weblog”—that’s “web log” not “we blog”! The earliest `,
        body: `<p>Let’s start with the basics. What exactly is a blog?</p><p>The word “blog” is a contraction of “weblog”—that’s “web log” not “we blog”!</p><p>The earliest blogs were online diaries, or logs, beginning in 1993. During the rest of the 1990s, personal blogging gradually became popular, with the term “weblog” being coined in 1997. Before that, what we now call blogs were called online journals or online diaries.</p><p>Up until 1998, bloggers needed a lot of technical skills. But in 1998, The Open Diary launched. It was the first blogging platform, and it was followed in 1999 by Blogger and LiveJournal—both of which are still going strong today.</p><p>WordPress came on the scene in 2003, built by two college students, Matt Mullenweg and Mike Little. After that, things moved fast:</p><ul><li>2003 – Blogs started to be monetized through ads, with Google’s newly launched AdSense</li><li>2004 – “Blog” was Merriam-Webster’s word of the year</li><li>2005 – YouTube and video blogging began</li><li>2006 – Huffington Post and BuzzFeed launched, bringing together news (factual content) and blogging (opinion-based content)</li><li>2007 – Twitter (and “micro-blogging”) took off</li><li>2009 – The White House launched its blog</li><li>2012 – Medium was launched, offering another way for bloggers to publish content online</li><li>2015 – LinkedIn’s blogging platform, Pulse, became available to all users</li><li>2016 – WordPress launched the “.blog” domain extension</li></ul><p><span>Thanks for showing your interest</span></p>`
    },
    {
        id: 6,
        date: "26 December 2016",
        title: "What is Lorem Ipsum?",
        cardtext: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
        body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><span>Thanks for showing your interest</span></p>`
    },
    {
        id: 7,
        date: "26 December 2016",
        title: "Why do we use it?",
        cardtext: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum`,
        body: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><span>Thanks for showing your interest</span></p>`
    },
    {
        id: 8,
        date: "26 December 2016",
        title: "Where does it come from?",
        cardtext: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
        body: `<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><p><span>Thanks for showing your interest</span></p>`
    },
]
export default blogs