const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product
    ]}
  .then(ecommerce_db => res.json(ecommerce_db))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

// be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [Product]
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
 
  Category.create(
    createcategory.req.body
  ).then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


where: {
  id: req.params.id
}
})

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    category_name: req.body.category_name
{
    where: {id: req.params.id
    }
    }
  ).then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'Category not found' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
