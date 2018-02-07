module.exports = (sequelize, DataTypes) => {
    const TicketingInfo = sequelize.define('TicketingInfo', {
        name: DataTypes.STRING,
        numberOfTix: DataTypes.INTEGER,
        submissionID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    }, {
        timestamps: false
    })
    return TicketingInfo
}
