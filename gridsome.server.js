module.exports = function(api) {
    api.loadSource(store => {
	if (process.env.NODE_ENV === 'production') {
	    const journals = store.getCollection('JournalPost')
	    journals.data().forEach(node => {
		if (node.published !== true) {
		    journals.removeNode(node.id)
		}
	    })
	    const projects = store.getCollection('ProjectPost')
	    projects.data().forEach(node => {
		if (node.published !== true) {
		    projects.removeNode(node.id)
		}
	    })
	}
    })
}
