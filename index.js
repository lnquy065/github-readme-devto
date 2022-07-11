/*
 * @Author: lnquy065@gmail.com
 * @Date: 11/07/2022
 * @Last Modified by: quyln
 */

const http = require('http');
const url = require('url');
const {DevToService} = require("./service/devto-service");

/**
 * @typedef {Object} ArticleRequest
 * @property {string} backgroundColor
 * @property {string} textColor
 * @property {string} fontSize
 * @property {string} fontFamily
 * @property {boolean} showTitle
 */

http.createServer(async function (req, res) {
    try {
        /**
         * @type {ArticleRequest & PublishedArticlesRequest}
         */
        const queryParams = url.parse(req.url, true).query;
        const devToResponse = await DevToService.getPublishedArticle(queryParams)

        const styles = {
            textColor: queryParams.textColor || '1f6feb',
            fontSize: queryParams.fontSize || 14,
            offsetY: 0
        }

        let result = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.2" width="500" height="${devToResponse.length * Math.round(styles.fontSize * 1.5) + styles.offsetY + 10}">
        <style>
            .title, .article-title {
                font-family: 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif;
            }
        </style>
    `;

        devToResponse.forEach((article, index) => {
            result += `<g transform="translate(0, ${index * Math.round(styles.fontSize * 1.5) + styles.offsetY})">
       
       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  height="100px" version="1.2" baseProfile="tiny" style="margin: 10px">
<!--    <rect width="100%" height="100%" fill="" style="padding:10px;"/>-->
      <g fill="none" stroke="black" stroke-width="1" fill-rule="evenodd" stroke-linecap="square" stroke-linejoin="bevel">
      
      <circle cx="15" cy="15" r="3" fill="#${styles.textColor}" stroke="none"/>
 <text class="article-title" fill="#${styles.textColor}" fill-opacity="1" stroke="none"  x="25" y="20" font-size="${styles.fontSize || 15}"  >
                    ${article.title}
                </text>
      </g>
    </svg>
        
               
               
            </g>
`;
        })

        result += `</svg>`;

        res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.setHeader('Expires', '-1');
        res.setHeader('Pragma', 'no-cache');
        res.writeHead(200, {'Content-Type': 'image/svg+xml'});

        res.write(result);
        res.end();
    } catch (e) {

    }
}).listen(process.env.PORT || 3200, function () {
    console.log("server running at 3200");
});