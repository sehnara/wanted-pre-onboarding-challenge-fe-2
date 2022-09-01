/**
 * @typedef {Object} Todo
 * @property {number} id 
 * @property {string} contents
 * @property {boolean} completed
 * @property {string} category
 * @property {string[]} [tags]
 */

/** @function create
 * @param {string} contents 내용
 * @param {boolean} [completed = false] 완료여부
 * @param {string} category 카테고리
 * @param {string[]} [tags] 태그들
 */
function create(contents, completed, category, tags) {}

/** @function read
 * @param {number} [id] ID를 기반으로 특정 할 일을 조회할 수 있다. ID가 없으면 모든 할 일을 조회한다.
 * @returns {Todo | Todo[]} 
 */
 function read(id) {return Todo}

/** @function update
 * @param {number} id
 * @param {string} [contents] 내용
 * @param {boolean} [completed] 완료여부
 * @param {string} [category] 카테고리
 * @param {number[]} [tagIndex] 태그 인덱스, 수정할 태그 인덱스를 순서대로 배열형태로 기입한다. 태그 인덱스 배열이 빈배열이거나 기입하지 않을 시 tags 수정은 하지 않는다.
 * @param {string[]} [tags] 태그들, 수정할 인덱스 배열에 매칭하여 수정할 데이터를 기입한다.
 */
 function update(id, contents, completed, category,tagIndex, tags) {}

 /** @function delete
 * @param {number} [id] ID를 기반으로 특정 할 일을 삭제할 수 있다. ID가 없으면 모든 할 일을 삭제한다.
 * @param {number[]} [index] index값이 있으면 특정 할 일의 tags중 일부만 삭제한다. tag의 index를 배열로 넣어 특정 태그들을 삭제할 수 있다. index 배열을 기입하지 않으면 tag는 삭제되지 않는다. 
 */
  function _delete(id, index) {}