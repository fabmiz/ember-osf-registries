import Ember from 'ember';

var date = new Date();

export default function() {
    this.get('/preprints', function() {
        return {
            data: [{
                type: 'preprints',
                id: 1,
                attributes: {
                    title: 'Eating toxic algae makes plankton speedy swimmers',
                    authors: ['Veruca Salt', 'Zach Janicki'],
                    date: date,
                    subject: 'Biology',
                    abstract: 'A meal of toxic algae puts a spring into a tiny ocean-dwelling plankton’s trek. The bad news: That just might send it straight into the jaws of a hungry fish. ' +
                    'Copepods (KO-puh-podz) are relatives of shrimp and lobsters. But very tiny cousins. They grow to be only about 1.5 millimeters (less than 0.06 inch) long. Still, size isn’t everything. Each one can suck in 100 liters (26.4 gallons) of seawater per day.',
                    publisher: 'Center for Open Science',
                    project: {
                        name: 'A Neat Project',
                        link: 'https://osf.io/frbta/'
                    },
                    supplementalMaterials: '',
                    figures: '',
                    license: 'MIT License',
                }
            }, {
                type: 'preprints',
                id: 2,
                attributes: {
                    title: 'Eating toxic algae makes plankton speedy swimmers',
                    authors: 'Veruca Salt',
                    date: date,
                    subject: 'Biology',
                    abstract: 'A meal of toxic algae puts a spring into a tiny ocean-dwelling plankton’s trek. The bad news: That just might send it straight into the jaws of a hungry fish. ' +
                    'Copepods (KO-puh-podz) are relatives of shrimp and lobsters. But very tiny cousins. They grow to be only about 1.5 millimeters (less than 0.06 inch) long. Still, size isn’t everything. Each one can suck in 100 liters (26.4 gallons) of seawater per day.',
                    publisher: 'Center for Open Science',
                    project: {
                        name: 'A Neat Project',
                        link: 'https://osf.io/frbta/'
                    },
                    supplementalMaterials: '',
                    figures: '',
                    license: 'MIT License',
                }
            }, {
                type: 'preprints',
                id: 3,
                attributes: {
                    title: 'Eating toxic algae makes plankton speedy swimmers',
                    authors: 'Veruca Salt',
                    date: date,
                    subject: 'Biology',
                    abstract: 'A meal of toxic algae puts a spring into a tiny ocean-dwelling plankton’s trek. The bad news: That just might send it straight into the jaws of a hungry fish. ' +
                    'Copepods (KO-puh-podz) are relatives of shrimp and lobsters. But very tiny cousins. They grow to be only about 1.5 millimeters (less than 0.06 inch) long. Still, size isn’t everything. Each one can suck in 100 liters (26.4 gallons) of seawater per day.',
                    publisher: 'Center for Open Science',
                    project: {
                        name: 'A Neat Project',
                        link: 'https://osf.io/frbta/'
                    },
                    supplementalMaterials: '',
                    figures: '',
                    license: 'MIT License',
                }
            }]
        };
    });
}
