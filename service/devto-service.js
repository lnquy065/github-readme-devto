/*
 * @Author: lnquy065@gmail.com
 * @Date: 11/07/2022
 * @Last Modified by: quyln
 */

const https = require('https');
const url = require('url');

/**
 * For more detail: https://developers.forem.com/api#tag/articles
 * @typedef {Object} PublishedArticlesRequest
 * @property {number} page - Pagination page, Default: 1.
 * @property {number} perPage - Page size (the number of items to return per page), Default: 30.
 * @property {string} tag - Using this parameter will retrieve articles that contain the requested tag.
 * @property {string} tags - Using this parameter will retrieve articles with any of the comma-separated tags.
 * @property {string} tagsExclude - Using this parameter will retrieve articles that do not contain any of comma-separated tags.
 * @property {string} username - Using this parameter will retrieve articles belonging to a User or Organization ordered by descending publication date.
 * @property {string} state - Using this parameter will allow the client to check which articles are fresh or rising.
 * @property {number} top - Using this parameter will allow the client to return the most popular articles in the last N days.
 * @property {number} collectionId - Adding this will allow the client to return the list of articles belonging to the requested collection, ordered by ascending publication date.
 *
 */

/**
 * @typedef {Object} PublishedArticlesResponse
 * @property {string} type_of
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} cover_image
 * @property {string} readable_publish_date
 * @property {string} social_image
 * @property {string[]} tag_list
 * @property {string} tags
 * @property {string} slug
 * @property {string} path
 * @property {string} url
 * @property {string} canonical_url
 * @property {number} comments_count
 * @property {number} positive_reactions_count
 * @property {number} public_reactions_count
 * @property {string} created_at
 * @property {string} edited_at
 * @property {string} crossposted_at
 * @property {string} published_at
 * @property {string} last_comment_at
 * @property {string} published_timestamp
 * @property {number} reading_time_minutes
 * @property {string} published_at
 * @property {{
 *     name: string,
 *     username: string,
 *     twitter_username: string,
 *     github_username: string,
 *     website_url: string,
 *     profile_image: string,
 *     profile_image_90: string,
 * }} user
 * @property {{
 *     name: string,
 *     username: string,
 *     slug: string,
 *     profile_image: string,
 *     profile_image_90: string,
 * }} organization
 * @property {{
 *     name: string,
 *     bg_color_hex: string,
 *     text_color_hex: string
 * }} flare_tag
 */

const DevToService = {

    /**
     * Get published articles
     * https://developers.forem.com/api#tag/articles
     * @param {PublishedArticlesRequest} request
     * @return Promise<PublishedArticlesResponse[]>
     */
    getPublishedArticle: (request) => {
        const requestUrl = url.parse(url.format({
            protocol: 'https',
            hostname: 'dev.to',
            pathname: '/api/articles',
            query: {
                ...request
            }
        }));

        return new Promise((resolve, reject) => {
            console.log(requestUrl.href)
            https.get(requestUrl.href, {
                headers: {
                    'user-agent': "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36"
                }
            }, resp => {
                if (resp.statusCode !== 200) {
                    reject(resp.statusCode)
                }
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    resolve(JSON.parse(data))
                })
            }).on("error", (err) => {
                reject(err)
            })
        })
    }
}


module.exports.DevToService = DevToService