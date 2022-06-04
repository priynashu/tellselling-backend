const { promisify } = require('util');
const ResourceFilters = require('../../models/ResourceFilters')
const FilterController = async (req, res) => {
    // console.log("inside filter controller",req.body);
    const requests = req.body;
    if (requests.method == "GET") {
        try {
            const filters = await ResourceFilters.findOne({ tenantId: requests.tenantId });
            // console.log("filters are",filters);
            return res.status(200).json(filters);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Something went wrong' });
        }
    } else if (requests.method == "UPDATE") {
        const filter = await ResourceFilters.findOne({ tenantId: requests.tenantId });
        if (requests.filter == "categories") {
            console.log("categories",requests);
            try {
                const edited = {
                    tenantId: filter.tenantId,
                    categories: requests.data,
                    tags: filter.tags,
                    content_areas: filter.content_areas,
                    internal_uses: filter.internal_uses,
                    owner: filter.owner
                }
                const response= await ResourceFilters.findOneAndUpdate({tenantId: requests.tenantId },{categories:requests.data},{ "returnNewDocument": false });

                return res.status(200).json(response);
            } catch (err) {
                console.log(err)
            }
        }
        else if (requests.filter == "tags") {
            console.log("tags",requests);
            try {
                const edited = {
                    tenantId: filter.tenantId,
                    categories: filter.categories,
                    tags: requests.data,
                    content_areas: filter.content_areas,
                    internal_uses: filter.internal_uses,
                    owner: filter.owner
                }
                const response= await ResourceFilters.findOneAndUpdate({tenantId: requests.tenantId },{tags:requests.data},{ "returnNewDocument": false });

                return res.status(200).json(response);
            } catch (err) {
                console.log(err)
            }
        }
        else if (requests.filter == "content_areas") {
            // console.log("areas",requests);
            try {
                const edited = {
                    tenantId: filter.tenantId,
                    categories: filter.categories,
                    tags: filter.tags,
                    content_areas: requests.data,
                    internal_uses: filter.internal_uses,
                    owner: filter.owner
                }
                const response= await ResourceFilters.findOneAndUpdate({tenantId: requests.tenantId },{content_areas:requests.data},{ "returnNewDocument": false });

                return res.status(200).json(response);
            } catch (err) {
                console.log(err)
            }
        }
        else if (requests.filter == "internal_uses") {
            // console.log("internal",requests);
            try {
                const edited = {
                    tenantId: filter.tenantId,
                    categories: filter.categories,
                    tags: filter.tags,
                    content_areas: filter.content_areas,
                    internal_uses: requests.data,
                    owner: filter.owner
                }
                const response= await ResourceFilters.findOneAndUpdate({tenantId: requests.tenantId },{internal_uses:requests.data},{ "returnNewDocument": false });

                return res.status(200).json(response);
            } catch (err) {
                console.log(err)
            }
        }
       else if (requests.filter == "owner") {
            try {
                const edited = {
                    tenantId: filter.tenantId,
                    categories: filter.categories,
                    tags: filter.tags,
                    content_areas: filter.content_areas,
                    internal_uses: filter.internal_uses,
                    owner: requests.data
                }
                const response= await ResourceFilters.findOneAndReplace({tenantId: requests.tenantId },edited,{ "returnNewDocument": false });

                return res.status(200).json(response);
            } catch (err) {
                console.log(err)
            }
        }
    } 
    // else if(requests.method=="COUNT"){
    //     if (requests.filter == "owner") {}
    // }
    else {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
    // Creating new Resource
    /*
    const newFilter = await ResourceFilters.create({
        tenantId: '61c22f881a9bd3199b674d24',
        categories: ['nipa','utpal'],
        tags:['nipa','utpal'],
        content_areas: ['nipa','utpal'],
        internal_uses: ['nipa','utpal'],
        owner: ['nipa','utpal']
    });
    
    // console.log(newResource);
    return res.status(200).json(newFilter);*/
}
module.exports = FilterController; 