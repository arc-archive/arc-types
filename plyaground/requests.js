/** @typedef {import('../src/request/ArcRequest').ArcEditorRequest} ArcEditorRequest */
/** @typedef {import('../src/request/ArcRequest').ArcStoredRequest} ArcStoredRequest */
/** @typedef {import('../src/request/ArcRequest').ARCSavedRequest} ARCSavedRequest */

/**
 * @param {ArcEditorRequest} request 
 */
export function testEditorRequest(request) {
  const other = /** @type ArcEditorRequest */({
    id: 'test',
    url: 'x'
  });
  const copy = { ...request };
  // const stored = /** @type ArcStoredRequest */ (copy);
  // if (stored.type && stored.type === 'saved') {
  //   const saved = /** @type ARCSavedRequest */ (stored)
  //   saved.name = 'test';
  //   saved.id = saved._id;
  //   copy = /** @type ArcEditorRequest */(saved);
  // }
  return [copy, other];
}