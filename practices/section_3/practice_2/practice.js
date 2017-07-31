function create_updated_collection(collection_a, object_b) {
  collection_a.forEach(x => {
      if(object_b['value'].indexOf(x.key) !== -1){
          let n = parseInt(x.count / 3);
          x.count -= n;
      }
  });
  return collection_a;
}

module.exports = create_updated_collection;
